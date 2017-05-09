import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';





class Signup extends Component {

    onSubmit(values) {
        this.props.signupUser(values, () => {
            this.props.history.push('/');
        });
    }      

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                    />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }    


    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className = "under-nav" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="User email:"
                    name="email"
                    component={this.renderField}
                    />
                <Field
                    type="password"
                    label="User password:"
                    name="password"
                    component={this.renderField}
                    />
                <Field
                    type="password"
                    label="Confirm password:"
                    name="passwordConfirm"
                    component={this.renderField}
                    />

                {this.renderAlert()}
                <button type="submit" className="btn btn-primary">Sign up</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Please enter an email';
    }

    if (!values.password) {
        errors.password = 'Please enter a password';
    }

    if (!values.passwordConfirm) {
        errors.passwordConfirm = 'Please enter a password confirmation';
    }

    if (values.password !== values.passwordConfirm) {
        errors.password = 'Passwords must match';
    }

    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    validate,
    form: 'signup'
})(
connect(mapStateToProps, actions)(Signup));