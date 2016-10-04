import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {Scrollspy} from 'react-scrollspy';
import SimpleForm from './components/simple-form-display';
import ValidationForm from './components/validation-form-display';
import AdvancedForm from './components/advanced-form-display';


const App = React.createClass({
  render() {
    const items = ['simple', 'validation', 'advanced'];
    return (
      <div>
        <div className="nav-container">
          <nav>
            <header>
              <h1>Formwood<br/>Examples</h1>
            </header>
            <Scrollspy items={items} currentClassName="current">
              <li><a href="#simple">Basic form</a></li>
              <li><a href="#validation">Basic validation</a></li>
              <li><a href="#advanced">Advanced validation</a></li>
            </Scrollspy>
          </nav>
        </div>
        <main>
          <SimpleForm/>
          <ValidationForm/>
          <AdvancedForm/>
        </main>
      </div>
    );
  }
});

ReactDom.render(
  <App/>,
  document.getElementById('content')
);
