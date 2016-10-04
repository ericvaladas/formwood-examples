import React from 'react';
import Prism from "prismjs";
import SimpleForm from './simple-form';


const code = (
`const InputField = Field(React.createClass({
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
      <section id="simple">
        <div className="example-form">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <SimpleForm/>
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
