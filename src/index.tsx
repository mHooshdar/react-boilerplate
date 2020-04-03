// node_modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import { createHashHistory } from 'history';
// components
import App from '@components/App';
// config
import configureStore from '@stores/configureStore';
// serviceWorker
import * as serviceWorker from './serviceWorker';
// styles
import './index.css';

const history = createHashHistory({
  // basename: '',
  // hashType: 'slash' //Hugh does not work!
});

const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} context={ReactReduxContext}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
