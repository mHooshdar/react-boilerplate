// node_modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
// config
import configureStore from '@stores/configureStore';
// components
import App from './App';
// serviceWorker
import * as serviceWorker from './serviceWorker';
// styles
import '@styles/index.scss';

const history = createHashHistory({
  // basename: '',
  // hashType: 'slash' //Hugh does not work!
});

const store = configureStore(history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
