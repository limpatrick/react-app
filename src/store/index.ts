import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import createRootReducer from './root-reducer';

// browser history
export const history = createBrowserHistory();

const routerMiddleware = createRouterMiddleware(history);

// configure middlewares
const middlewares = [routerMiddleware];
// compose enhancers
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
// rehydrate state on app start
const initialState = {};

// create store
const store = createStore(createRootReducer(history), initialState, enhancer);

export default store;
