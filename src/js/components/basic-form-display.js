import React from 'react';
import Prism from "prismjs";
import BasicForm from './basic-form';


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
    this.setState({values: form.values});
  },

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Basic Form</h2>
        <InputField type="text" name="username" id="username" label="Username"/>
        <InputField type="password" name="password" id="password" label="Password"/>
        <button className="btn btn-primary" type="submit">Submit</button>
        <pre className="alert alert-success">{JSON.stringify(this.state || {}, null, 2)}</pre>
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
                <BasicForm/>
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
