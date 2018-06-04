import React, { PureComponent } from 'react';

import Header from '../header';
import Terminal from '../terminal';

import './styles.css';

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <Header />
          <Terminal />
        </div>
      </div>
    );
  }
}

export default App;
