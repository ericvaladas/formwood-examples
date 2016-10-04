import React from 'react';
import {Field, Form} from 'formwood';

function required() {
  return (value) => {
    if (!!value === true) {
      return true;
    }
    return 'Required';
  };
};

function minLength(length) {
  return (value) => {
    if (value && value.length >= length) {
      return true;
    }
    return `Must be at least ${length} characters`
  };
}

const InputField = Field(React.createClass({
  render() {
    return (
      <div className={`form-group ${this.props.message ? 'has-error' : ''}`}>
        <label className="control-label" htmlFor={this.props.id}>{this.props.label}</label>
        <input className="form-control" {...this.props.element}/>
        <span className="help-block">{this.props.message}</span>
      </div>
    );
  }
}));

export default React.createClass({
  handleSubmit(e, form) {
    if (form.valid) {
      this.setState({values: form.values});
    }
  },

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Field Validation</h2>
        <InputField type="text" name="username" label="Username" validators={[required(), minLength(3)]}/>
        <InputField type="password" name="password" label="Password" validators={[required(), minLength(6)]}/>
        <button className="btn btn-primary" type="submit">Submit</button>
        <pre className="alert alert-success">{JSON.stringify(this.state || {}, null, 2)}</pre>
        <div className="alert alert-info" role="alert">
          <code>InputField</code> is shown in the <a href="#basic-form" className="alert-link"> Basic Form</a>.
        </div>
      </Form>
    );
  }
});

