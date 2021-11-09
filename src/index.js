import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore, { history } from './Store';
const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
