import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import dataReducer from './reducers/dataState.js'

const store = createStore(dataReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
