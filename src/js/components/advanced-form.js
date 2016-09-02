import React from 'react';
import {Field, Form} from 'formwood';
import {minLength, passwordEquals, required} from '../validators';


const InputField = Field(React.createClass({
  handleChange(e) {
    this.props.element.onChange(e).then(this.props.validate);
  },

  handleBlur(e) {
    this.props.element.onChange(e).then(this.props.validate);
  },

  render() {
    let classNames = "form-group";
    if (this.props.message) {
      classNames += " has-error";
    }
    return (
      <div className={classNames}>
        <label className="control-label" htmlFor={this.props.id}>{this.props.label}</label>
        <input autoComplete="off" className="form-control" {...this.props.element} onChange={this.handleChange} onBlur={this.handleBlur}/>
        <span className="help-block">{this.props.message}</span>
      </div>
    );
  }
}));

const CheckboxField = Field(React.createClass({
  render() {
    return (
      <div className="checkbox">
        <label>
          <input type="checkbox" {...this.props.element} checked={this.props.value}/>
          {this.props.label}
        </label>
      </div>
    );
  }
}));

export default React.createClass({
  getInitialState() {
    return {
      values: {
        username: {value: 'Hi'},
        junkmail: {value: true}
      }
    }
  },

  passwordValue() {
    if (this.form) {
      return this.form.fields.password.state.value;
    }
  },

  render() {
    return (
      <Form values={this.state.values} ref={(form) => { this.form = form; }}>
        <h2>Advanced Form</h2>
        <InputField type="text" name="username" id="username" label="Username" validators={[required(), minLength(4)]}/>
        <InputField type="password" name="password" id="password" label="Password" validators={[required(), minLength(6)]}/>
        <InputField type="password" name="password-confirm" id="password-confirm" label="Confirm" validators={[required(), passwordEquals(this.passwordValue)]}/>
        <CheckboxField name="junkmail" label="Sign me up for junk"/>
        <button className="btn btn-primary" type="submit">Submit</button>
      </Form>
    );
  }
});
