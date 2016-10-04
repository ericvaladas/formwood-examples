import React from 'react';
import Prism from "prismjs";
import AdvancedForm from './advanced-form';


const code = (
`const InputField = Field(React.createClass({
  handleChange(e) {
    this.props.element.onChange(e).then(this.props.validate);
  },

  render() {
    let classNames = "form-group";
    if (!this.props.valid) {
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

const RadioField = Field(React.createClass({
  render() {
    return (
      <div className="radio">
        <label>
          <input type="radio" {...this.props.element} />
            {this.props.label}
        </label>
        <span className="help-block">{this.props.message}</span>
      </div>
    );
  }
}));

const CheckboxField = Field(React.createClass({
  render() {
    let classNames = "form-group";
    if (!this.props.valid) {
      classNames += " has-error";
    }
    return (
      <div className={classNames}>
        <div className="checkbox">
          <label>
            <input type="checkbox" {...this.props.element} />
              {this.props.label}
          </label>
          <span className="help-block">{this.props.message}</span>
        </div>
      </div>
    );
  }
}));

const CheckboxField2 = React.createClass({
  render() {
    let classNames = "form-group";
    if (!this.props.valid) {
      classNames += " has-error";
    }
    return (
      <div className={classNames}>
        <div className="checkbox">
          <label>
            <input type="checkbox" {...this.props.element} />
              {this.props.label}
          </label>
        </div>
      </div>
    );
  }
});

const SelectField = Field(React.createClass({
  render() {
    return (
      <select {...this.props.element} className="form-control">
        <option>ants</option>
        <option>bees</option>
        <option>cats</option>
        <option>4</option>
        <option>5</option>
      </select>
    );
  }
}));

function selectTwo(name) {
  return () => {
    let values = 0;
    document.getElementsByName(name).forEach((field) => {
      if (field.checked) { values += 1; }
    });

    if (values < 2) { return "Select at least two"; }

    return true;
  }
}

const FavFruits = Field(React.createClass({
  render() {
    return (
      <div>
        <CheckboxField2 element={this.props.element} value="apple" label="Apple"/>
        <CheckboxField2 element={this.props.element} value="banana" label="Banana"/>
        <CheckboxField2 element={this.props.element} value="mango" label="Mango"/>
        <span className="help-block">{this.props.message}</span>
      </div>
    );
  }
}));

export default React.createClass({
  getInitialState() {
    return {
      values: {
        username: {value: 'Hi', message: 'hi'},
        colour: {value: "green"},
        //sel: {value: "bees"},
        "fav-fruits": {value: "apple"}
      }
    }
  },

  handleSubmit(e, form) {
    //console.log(JSON.stringify(form.values));
    console.log(this.form.invalidFields);
    //this.setState({values: {username: {message: 'wtffff'}}});
  },

  passwordValue() {
    if (this.form) {
      return this.form.getField('password').state.value;
    }
  },


  blah() {
    return (
      <div>
        <RadioField name="colour" value="red" label="Red"/>
        <RadioField name="colour" value="green" label="Green"/>
        <RadioField name="colour" value="blue" label="Blue"/>
      </div>
    );
  },

  render() {
    return (
      <Form onSubmit={this.handleSubmit} values={this.state.values} ref={(form) => { this.form = form; }}>
        <h2>Advanced Form</h2>
        <InputField type="text" name="username" id="username" label="Username" validators={[required(), minLength(4)]}/>
        <InputField type="password" name="password" id="password" label="Password" validators={[required(), minLength(6)]}/>
        <InputField type="password" name="password-confirm" id="password-confirm" label="Confirm" validators={[required(), passwordEquals(this.passwordValue)]}/>
        {this.blah()}
        <br/>
        <SelectField name="sel" multiple={true}/>
        <br/>
        <FavFruits name="fav-fruits" validators={[selectTwo("fav-fruits")]} />

        <InputField type="email" name="email" />
        <CheckboxField name="beep" label="Beep" validators={[required()]} />
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
      <section {...this.props}>
        <div className="example-form">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <AdvancedForm/>
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
