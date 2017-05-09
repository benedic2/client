import React, { Component } from 'react';
import * as actions from '../../actions';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postNewReview } from '../../actions';

class ReviewNew extends Component {
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
    this.props.postNewReview(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="under-nav " onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Review date:"
          name="reviewDate"
          component={this.renderField}
        />        
        <Field
          label="Project Name:"
          name="projectName"
          component={this.renderField}
        />
        <Field
          label="Single sentance summary:"
          name="singleSentance"
          component={this.renderField}
        />
        <Field
          label="Three sentance summary:"
          name="threeSentance"
          component={this.renderField}
        />
        <Field
          label="Main photo link:"
          name="photoMain"
          component={this.renderField}
        />
        <Field
          label="team members:"
          name="team"
          component={this.renderField}
        />
        <Field
          label="Project launch date:"
          name="launchDate"
          component={this.renderField}
        />
        <Field
          label="Project delivery date:"
          name="delivery"
          component={this.renderField}
        />
        <Field
          label="Numeric grade of project:"
          name="gradeOverall"
          component={this.renderField}
        />
        <Field
          label="Numeric grade for manufacturing:"
          name="gradeMaking"
          component={this.renderField}
        />
        <Field
          label="Numeric grade for fund raising:"
          name="gradeFinancials"
          component={this.renderField}
        />
        <Field
          label="Numeric grade for feasibility:"
          name="gradeFeasible"
          component={this.renderField}
        />
        <Field
          label="Summary of the project:"
          name="projectSummary"
          component={this.renderField}
        />
        <Field
          label="Detailed overall review:"
          name="detailOverall"
          component={this.renderField}
        />
        <Field
          label="Detailed manufacturing review:"
          name="detailManufacturing"
          component={this.renderField}
        />
        <Field
          label="Detailed budget review:"
          name="detailBudget"
          component={this.renderField}
        />
        <Field
          label="Detailed review of the engineering:"
          name="detailEngineering"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
 /* if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content please';
  }*/

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'ReviewNewForm'
})(
  connect(null,{ postNewReview })(ReviewNew)
);




