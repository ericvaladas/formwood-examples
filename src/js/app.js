import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {Scrollspy} from 'react-scrollspy';
import BasicForm from './components/basic-form-display';
import FormValidation from './components/form-validation-display';
import FieldValidation from './components/field-validation-display';
import AdvancedForm from './components/advanced-form-display';


const App = React.createClass({
  slugify(value) {
    return value.toLowerCase().replace(/ /g, '-');
  },

  examples: [
    'Basic Form',
    'Field Validation',
    'Form Validation',
    'Advanced Validation'
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
          <BasicForm id={examples[0]}/>
          <FieldValidation id={examples[1]}/>
          <FormValidation id={examples[2]}/>
          <AdvancedForm id={examples[3]}/>
        </main>
      </div>
    );
  }
});

ReactDom.render(
  <App/>,
  document.getElementById('content')
);
