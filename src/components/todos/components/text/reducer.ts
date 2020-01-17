import { ActionType, createReducer } from 'typesafe-actions';
import { assoc } from 'ramda';
import * as actions from './actions';

type State = {
	readonly editing: boolean;
	readonly value: string;
};
type Action = ActionType<typeof actions>;

export const initialState: State = { editing: false, value: '' };

export default createReducer<State, Action>(initialState)
	.handleAction(actions.setEditingOn, state => assoc('editing', true, state))
	.handleAction(actions.setEditingOff, (state, { payload }) => ({ editing: false, value: payload }))
	.handleAction(actions.setValue, (state, { payload }) => assoc('value', payload, state));
