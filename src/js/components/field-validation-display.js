import React from 'react';
import Prism from "prismjs";
import FieldValidation from './field-validation';


const code = (
`function required() {
  return (value) => {
    if (Boolean(value) === false) {
      return 'Required';
    }
  };
};

function minLength(length) {
  return (value) => {
    if (!value || value.length < length) {
      return \`Must be at least \${length} characters\`
    }
  };
}

export default React.createClass({
  handleSubmit(e, form) {
    if (form.valid) {
      this.setState({values: form.values});
    }
  },

  render() {
    const values = this.state ? this.state.values : {};
    return (
      <Form onSubmit={this.handleSubmit} values={this.state.formValues}>
        <h2>Field Validation</h2>
        <InputField type="text" name="username" label="Username" validators={[required(), minLength(3)]}/>
        <InputField type="password" name="password" label="Password" validators={[required(), minLength(6)]}/>
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
                <FieldValidation/>
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

