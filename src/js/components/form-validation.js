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

export default React.createClass({
  getInitialState() {
    return {
      formValues: {},
      values: {}
    }
  },

  handleSubmit(e, form) {
    if (form.valid) {
      this.setState({values: form.values, formValues: {}}, () => {
        this.setState({
          formValues: {
            username: {message: "Username already exists"}
          }
        });
      });
    }
  },

  render() {
    return (
      <Form onSubmit={this.handleSubmit} values={this.state.formValues}>
        <h2>Form Validation</h2>
        <InputField type="text" name="username" label="Username"/>
        <InputField type="password" name="password" label="Password"/>
        <button className="btn btn-primary" type="submit">Submit</button>
        <pre className="alert alert-success">{JSON.stringify(this.state, null, 2)}</pre>
        <div className="alert alert-info" role="alert">
          <code>InputField</code> is shown in the <a href="#basic" className="alert-link">Basic Form</a>.
        </div>
      </Form>
    );
  }
});
