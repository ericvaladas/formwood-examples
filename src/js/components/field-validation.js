import React from 'react';
import {Field, Form} from 'formwood';

function required() { // fold-start
  return (value) => {
    if (Boolean(value) === false) {
      return 'Required';
    }
  }; // fold-end
};

function minLength(length) { // fold-start
  return (value) => {
    if (!value || value.length < length) {
      return `Must be at least ${length} characters`
    }
  }; // fold-end
}

const InputField = Field(React.createClass({ // fold-start
  render() {
    return (
      <div className={`form-group ${this.props.message ? 'has-error' : ''}`}>
        <label className="control-label" htmlFor={this.props.id}>{this.props.label}</label>
        <input className="form-control" {...this.props.element}/>
        <span className="help-block">{this.props.message}</span>
      </div>
    );
  } // fold-end
}));

export default React.createClass({
  handleSubmit(e, form) {
    if (form.valid) {
      this.setState({values: form.values});
    }
  },

  render() {
    const values = this.state ? this.state.values : {};
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Field Validation</h2>
        <InputField type="text" name="username" label="Username" validators={[required(), minLength(3)]}/>
        <InputField type="password" name="password" label="Password" validators={[required(), minLength(6)]}/>
        <button className="btn btn-primary" type="submit">Submit</button>
        <pre className="alert alert-success">{JSON.stringify(values, null, 2)}</pre>
      </Form>
    );
  }
});

