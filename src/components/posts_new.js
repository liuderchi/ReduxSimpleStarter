import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.title}</label>
        <input
          className="form-control"
          type="text"
          {...(field.input)}
        />
      {/* NOTE ...field.input
        Object Spread Properties syntax
          e.g. var obj = { id: 5, ...field.input})
      */}
      {field.meta.error}
      </div>
    )
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {/* NOTE call this.onSubmit only when passed validation */}
        <Field
          title="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          title="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          title="Post Content"
          name="content"
          component={this.renderField}
        />
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

function validate(values) {    // values: current values from each Fields
  const errors = {};

  // validate 'values'
  // NOTE prop of errors should be consistent with Field name
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }

  // NOTE if errors is empty, form is fine to submit
  // NOTE if error is NOT empty, redux assume form invalid and stop the sumission
  return errors;
}

export default reduxForm({   // passing option obj
  validate,    // called on input changed
  form: 'PostsNewForm'    // arbitrary string for form identity
})(PostsNew);
