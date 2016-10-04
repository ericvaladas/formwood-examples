import React from 'react';
import Prism from "prismjs";
import ValidationForm from './validation-form';


const code = (
`const InputField = Field(React.createClass({
  render() {
    let classNames = "form-group";
    if (this.props.message) {
      classNames += " has-error";
    }
    return (
      <div className={classNames}>
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
      values: {}
    }
  },

  handleSubmit(e, form) {
    if (form.valid) {
      this.setState({values: {}});

      // Get response from server
      this.setState({
        values: {
          username: {message: "Username already exists"}
        }
      });
    }
  },

  render() {
    return (
      <Form onSubmit={this.handleSubmit} values={this.state.values}>
        <h2>Form With Validation</h2>
        <InputField type="text" name="username" id="username" label="Username" validators={[required(), minLength(3)]}/>
        <InputField type="password" name="password" id="password" label="Password" validators={[required(), minLength(6)]}/>
        <button className="btn btn-primary" type="submit">Submit</button>
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
      <section id="validation">
        <div className="example-form">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <ValidationForm/>
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
