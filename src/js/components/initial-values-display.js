import React from 'react';
import Prism from "prismjs";
import InitialValues from './initial-values';


const code = (
`const SelectField = Field(React.createClass({
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
});`
);

export default React.createClass({
  code() {
    return {
      '__html': Prism.highlight(code, Prism.languages.javascript)
    };
  },

  render() {
    return (
      <section {...this.props}>
        <div className="example-form">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <InitialValues/>
              </div>
            </div>
          </div>
        </div>
        <div className="example-code">
          <pre
            className="language-javascript"
            dangerouslySetInnerHTML={this.code()}
          />
        </div>
      </section>
    );
  }
});
