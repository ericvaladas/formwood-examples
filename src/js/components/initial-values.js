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

const SelectField = Field(React.createClass({
  render() {
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <select {...this.props.element} className="form-control">
          {this.props.children}
        </select>
      </div>
    );
  }
}));

const CheckboxField = Field(React.createClass({
  render() {
    return (
      <div className="form-group">
        <div className="checkbox">
          <label>
            <input type="checkbox" {...this.props.element}/> {this.props.label}
          </label>
        </div>
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
      city: 'Toronto',
      color: ['green', 'blue'],
      fruit: 'Papaya'
    };

    return (
      <Form onSubmit={this.handleSubmit} values={initialValues}>
        <h2>Initial Values</h2>
        <InputField type="text" name="city" label="City"/>
        <CheckboxField type="checkbox" name="color" value="red" label="Red"/>
        <CheckboxField type="checkbox" name="color" value="green" label="Green"/>
        <CheckboxField type="checkbox" name="color" value="blue" label="Blue"/>
        <SelectField name="fruit" label="Fruit">
          <option>Banana</option>
          <option>Mango</option>
          <option>Papaya</option>
        </SelectField>
        <button className="btn btn-primary" type="submit">Submit</button>
        <pre className="alert alert-success">{JSON.stringify(values, null, 2)}</pre>
        <ul className="list-unstyled">
          <li><code>InputField</code> is shown in the <a href="#basic-form" className="alert-link">Basic Form</a></li>
        </ul>
      </Form>
    );
  }
});
