import React from 'react';
import {Field, Form} from 'formwood';


const InputField = Field(React.createClass({
  render() {
    return (
      <div className="form-group">
        <label className="control-label" htmlFor={this.props.id}>{this.props.label}</label>
        <input className="form-control" {...this.props.element}/>
      </div>
    );
  }
}));

export default React.createClass({
  handleSubmit(e, form) {
    console.log(JSON.stringify(form.values));
  },

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Simple Form</h2>
        <InputField type="text" name="username" id="username" label="Username"/>
        <InputField type="password" name="password" id="password" label="Password"/>
        <button className="btn btn-primary" type="submit">Submit</button>
      </Form>
    );
  }
});
