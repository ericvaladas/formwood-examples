import React from 'react';
import Prism from "prismjs";
import FormValidation from './form-validation';


const code = (
`export default React.createClass({
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
                <FormValidation/>
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
