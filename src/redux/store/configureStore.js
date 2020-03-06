import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middlewares = [thunk];

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__(),
)
}
