import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Signin extends Component {

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
    
    onSubmit(values) {
        this.props.signinUser(values, ()=>{
            this.props.history.push('/');
        });
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

                {this.renderAlert()}
                <button type="submit" className="btn btn-primary">Sign in</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.email) {
    errors.email = "Enter an email";
  }
  if (!values.password) {
    errors.password = 'Enter a password';
  }
 
  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    validate,
    form: 'signin'
})(
connect(mapStateToProps, actions)(Signin));


