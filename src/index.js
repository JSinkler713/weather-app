import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import configureStore from './redux/store/configureStore';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './redux/reducers/appReducer';


import './index.css';
import App from './App';

const store = createStore(
  appReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

