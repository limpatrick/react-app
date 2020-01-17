import { createSelector } from 'reselect';
import { prop, pipe, values, filter, propEq, map } from 'ramda';
import { RootState } from '~/store/root-reducer';
import { routerSelectors } from '../router';
import { TodoStatus, Todo } from './models';

const filterActiveTodos = (todos: Todo[]) => filter(propEq('status', TodoStatus.Active), todos);
const filterCompletedTodos = (todos: Todo[]) =>
	filter(propEq('status', TodoStatus.Completed), todos);
const mapToIds = (todos: Todo[]) => map(prop('id'), todos);

export const getTodos = (state: RootState) => state.entities.todos;
export const getAllTodosIds = createSelector(getTodos, prop('allIds'));
export const getAllTodos = createSelector(getTodos, pipe(prop('byId'), values));
export const getCurrentTodos = createSelector(
	[getAllTodos, routerSelectors.getPathnameStatus],
	(todos, pathname) => {
		switch (pathname) {
			case '':
				return todos;
			case 'active':
				return filterActiveTodos(todos);
			case 'completed':
				return filterCompletedTodos(todos);
			default:
				return [];
		}
	}
);
export const getCurrentTodosIds = createSelector(getCurrentTodos, mapToIds);
export const getActiveTodos = createSelector(getAllTodos, filterActiveTodos);
export const getActiveTodosIds = createSelector(getActiveTodos, mapToIds);
export const getCompletedTodos = createSelector(getAllTodos, filterCompletedTodos);
export const getCompletedTodosIds = createSelector(getCompletedTodos, mapToIds);
