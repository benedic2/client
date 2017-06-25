import React, { Component } from 'react';
import * as actions from '../../actions';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postNewComment } from '../../actions';
import { clearSearch } from '../../actions';
import {fetchReview} from '../../actions'

// Need to add an action for posting the new comment

class CommentNew extends Component {

    
    renderField(field) {
        const { meta: { touched, error} } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                    placeholder={field.placeholder}
                    />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    //Need to decide what to do after the comment is sent. could possibly just show the post comment box when there is not a comment associated with the user and project. Could have three possibilities: 1 no user than show sign up link hide all commments, 2 user not posted then show form, 3 user has posted then hide form or show the rating that was given. would get rid of the callback 

    onSubmit(values) {
        this.props.postNewComment(values, this.props._id, localStorage.user,() => this.props.fetchReview(this.props._id))
    }
    

    onClear() {
        this.props.reset();
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="container-fluid " onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                <Field
                    label="Opinion on this project:"
                    name="comment"
                    placeholder="120 characters"
                    component={this.renderField}
                    />        
                <Field
                    label="What grade do you give it overall:"
                    name="grade"
                    placeholder="Number 0 to 100"
                    component={this.renderField}
                    />
                <Field
                    label="How many weeks late will this be:"
                    name="late"
                    placeholder="Weeks: 0 to 99"
                    component={this.renderField}
                    />
                <button className="btn btn-default" type="submit" >Submit</button>

                <button className="btn btn-default" type="button" onClick={this.onClear.bind(this)}>
                    <i className="glyphicon glyphicon-remove"></i>
                </button>

            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    // Validate the inputs from 'values'
    if (!values.comment) {
        errors.comment = "...but what do you think?";
    } else if (values.comment.length > 120) {
        errors.comment = "Keep it under 120 characters"
    }

    if (!values.grade) {
        errors.grade = 'We want to know your grade';
    } else if (!/^(([0-9])|([0-9][0-9])|[1-9])$/.test(values.grade)) {
        errors.grade = "Must be a whole number 0 to 99"
    }

    if (!values.late) {
        errors.late = '0 for on time 99 for never';
    } else if (!/^(([0-9])|([0-9][0-9])|[1-9])$/.test(values.late)) {
        errors.late = "Must be a whole number 0 to 99"
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default reduxForm({
    validate,
    form: 'CommentNewForm'
})(
    connect(mapStateToProps,{postNewComment, clearSearch, fetchReview })(CommentNew)
);




