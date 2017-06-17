import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {searchReviews} from '../actions';
import {clearSearch} from '../actions';
import { Field, reduxForm } from 'redux-form';

class NavBar extends Component {

    renderLinks() {
        if (this.props.authenticated) {
            // show a link to sign out
            return <li className="nav-item pull-right">
                <Link className="nav-link" to="/signout">Sign Out</Link>
            </li>
        } else {
            // show a link to sign in or sign up
            return [
                <li className="nav-item pull-right" key={1}>
                    <Link className="nav-link" to="/signin">Sign In</Link>
                </li>,
                <li className="nav-item pull-right" key={2}>
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
            ];
        }
    }

    renderSearch(field) {
        return (
            <input
                className="form-control"
                type="text"
                {...field.input}
                />
        );
    }    

    onClear() {
        this.props.clearSearch();
        this.props.reset();
    }

    onSubmit(values) {
        this.props.searchReviews(values)
            .then(this.props.reset);
    }


    render (){
        const { handleSubmit,pristine,reset,submitting } = this.props;
        return (

            <nav className="navbar navbar-default navbar-static-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="navbar-brand">
                            <Link className="primary" to="/">Home</Link>
                        </div>
                    </div>


                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                        <ul className="nav navbar-nav navbar-right">
                            {/*The sign in out up links*/}
                            {this.renderLinks()}

                            <div className="col-sm-8 col-md-8  pull-right">
                                <form className="navbar-form" role="search" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                    <div className="input-group">
                                        <div className="input-group-btn">

                                            <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                                        </div>                                      
                                        <Field
                                            name="projectName"
                                            component={this.renderSearch}
                                            placeholder="Project Name"
                                            />        

                                        <div className="input-group-btn">

                                            <button className="btn btn-default" type="button" disabled={submitting} onClick={this.onClear.bind(this)}>
                                                    <i className="glyphicon glyphicon-remove"></i>
                                            </button>
                                        </div>  

                                    </div>
                                </form>
                            </div>        
                        </ul>

                    </div>
                </div>
            </nav>

        );
    }
};

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default reduxForm({
    form:'navsearch'
})(connect(mapStateToProps, {searchReviews,clearSearch})(NavBar))



