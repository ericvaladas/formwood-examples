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
    this.setState({values: form.values});
  },

  render() {
    const values = this.state ? this.state.values : {};
    const initialValues = {


    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Basic Form</h2>
        <InputField type="checkbox" name="color" value="red" label="Red"/>
        <InputField type="checkbox" name="color" value="green" label="Green"/>
        <InputField type="checkbox" name="color" value="blue" label="Blue"/>
        <button className="btn btn-primary" type="submit">Submit</button>
        <pre className="alert alert-success">{JSON.stringify(values, null, 2)}</pre>
      </Form>
    );
  }
});
