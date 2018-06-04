import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import './styles/reset.css';
import './styles/base.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
