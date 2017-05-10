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
      </div>
    )
  }

  render() {
    return (
      <form>
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
      </form>
    )
  }
}

export default reduxForm({   // passing option obj
  form: 'PostsNewForm'    // arbitrary string for form identity
})(PostsNew);
