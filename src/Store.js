import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createRootReducer from './reducers/RootReducer';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(thunk)),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history)))
  );
  return store;
}
