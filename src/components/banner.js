import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class Banner extends Component {
    render (){
        const review =_.map(this.props.reviews)[0]  
        if(!review){
            return(
                <div>loading...</div>
            )}else{
                const sectionStyle = {
                    backgroundImage: "url(" + ( review.photoMain ) + ")"
                }

                return (
                    <div className="">
                        <Link to ={`/reviews/${review._id}`}>
                            <div className="my_jumbotron jumbotron" style={sectionStyle}>
                                <div className="container">
                                    <div className="col-xs-8" > 
                                    </div>
                                    <div className ="col-xs-4 container-fluid">
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className = "under-banner">
                            <h1>{review.projectName}</h1>      
                            <h3>{review.singleSentance}</h3>
                        </div>
                    </div>
                );
            }
    };
}

function mapStateToProps(state, ownProps) {
    return {reviews: state.reviews[ownProps.criteria] };
}

export default connect(mapStateToProps)(Banner);

