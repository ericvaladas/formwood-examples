import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {Scrollspy} from 'react-scrollspy';
import Example from './components/example';
import BasicForm from './components/basic-form';
import BasicFormCode from '!raw!./components/basic-form';
import FormValidation from './components/form-validation';
import FormValidationCode from '!raw!./components/form-validation';
import FieldValidation from './components/field-validation';
import FieldValidationCode from '!raw!./components/field-validation';
import InitialValues from './components/initial-values';
import InitialValuesCode from '!raw!./components/initial-values';


const App = React.createClass({
  slugify(value) {
    return value.toLowerCase().replace(/ /g, '-');
  },

  examples: [
    'Basic Form',
    'Field Validation',
    'Form Validation',
    'Initial Values'
  ],

  exampleLinks() {
    return this.examples.map((name) => {
      const slug = this.slugify(name);
      return (
        <li key={slug}>
          <a href={`#${slug}`}>{name}</a>
        </li>
      );
    });
  },

  render() {
    const examples = this.examples.map(this.slugify);
    return (
      <div>
        <div className="nav-container">
          <nav>
            <header>
              <h1>Formwood<br/>Examples</h1>
            </header>
            <Scrollspy items={examples} currentClassName="current">
              {this.exampleLinks()}
            </Scrollspy>
          </nav>
        </div>
        <main>
          <Example id={examples[0]} component={<BasicForm/>} code={BasicFormCode}/>
          <Example id={examples[1]} component={<FieldValidation/>} code={FieldValidationCode}/>
          <Example id={examples[2]} component={<FormValidation/>} code={FormValidationCode}/>
          <Example id={examples[3]} component={<InitialValues/>} code={InitialValuesCode}/>
        </main>
      </div>
    );
  }
});

ReactDom.render(
  <App/>,
  document.getElementById('content')
);
