import { combineReducers } from 'redux';
import { append, assoc, assocPath, has, omit, without, evolve, reduce, mergeRight } from 'ramda';
import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { Todo, TodoStatus } from './models';

export type TodosState = {
	readonly byId: Record<string, Todo>;
	readonly allIds: string[];
};
type TodosAction = ActionType<typeof actions>;

const initialState: TodosState = { byId: {}, allIds: [] };

const byId = createReducer<TodosState['byId'], TodosAction>(initialState.byId)
	.handleAction(actions.add, (state, { payload: todo }) => assoc(todo.id, todo, state))
	.handleAction(actions.edit, (state, { payload: { id, text } }) => {
		if (text.length > 0) return has(id, state) ? assocPath([id, 'text'], text, state) : state;

		return omit([id], state);
	})
	.handleAction(actions.toggle, (state, { payload: { ids } }) =>
		evolve(
			reduce(
				(acc, id) =>
					mergeRight(
						acc,
						assoc(
							id,
							evolve({
								status: status =>
									status === TodoStatus.Active ? TodoStatus.Completed : TodoStatus.Active
							}),
							{}
						)
					),
				{},
				ids
			),
			state
		)
	)
	.handleAction(actions.deleteByIds, (state, { payload: { ids } }) => omit(ids, state));

const allIds = createReducer<TodosState['allIds'], TodosAction>(initialState.allIds)
	.handleAction(actions.add, (state, { payload: { id } }) => append(id, state))
	.handleAction(actions.edit, (state, { payload: { id, text } }) =>
		text.length > 0 ? state : without([id], state)
	)
	.handleAction(actions.deleteByIds, (state, { payload: { ids } }) => without(ids, state));

export default combineReducers({ byId, allIds });
