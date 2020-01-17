import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { StateType } from 'typesafe-actions';
import { todosReducer } from './features/todos';

export type RootState = StateType<ReturnType<typeof createRootReducer>>;

const entitiesReducers = combineReducers({ todos: todosReducer });
const createRootReducer = (history: History) =>
	combineReducers({ router: connectRouter(history), entities: entitiesReducers });

export default createRootReducer;
