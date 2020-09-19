// third-party imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';

// app imports
import App from './App';
import * as serviceWorker from './serviceWorker';

// create redux store

const store = createStore(() => {}, applyMiddleware(thunk));

// render App to Dom
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
