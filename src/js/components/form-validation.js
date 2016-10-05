import React from 'react';
import {Field, Form} from 'formwood';
import {minLength, required} from '../validators';

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

function mockPost() {
  return new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
}

export default React.createClass({
  getInitialState() {
    return {
      messages: {},
      values: {}
    }
  },

  handleSubmit(e, form) {
    if (form.valid) {
      this.setState({values: form.values, messages: {}})

      mockPost(form.values).then(() => {
        this.setState({
          messages: {username: 'Username already exists'}
        });
      });
    }
  },

  render() {
    return (
      <Form onSubmit={this.handleSubmit} messages={this.state.messages}>
        <h2>Form Validation</h2>
        <InputField type="text" name="username" label="Username" validators={[required()]}/>
        <InputField type="password" name="password" label="Password"/>
        <button className="btn btn-primary" type="submit">Submit</button>
        <pre className="alert alert-success">{JSON.stringify(this.state.values, null, 2)}</pre>
        <div className="alert alert-info" role="alert">
          <code>InputField</code> is shown in the <a href="#basic-form" className="alert-link">Basic Form</a>.
        </div>
        <div className="alert alert-info" role="alert">
          <code>Validators</code> are shown in <a href="#field-validation" className="alert-link">Field Validation</a>.
        </div>
      </Form>
    );
  }
});
