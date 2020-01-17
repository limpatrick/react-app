import cuid from 'cuid';
import { createAction } from 'typesafe-actions';
import { Todo, TodoStatus } from './models';

const ADD = 'todos/ADD';
const EDIT = 'todos/EDIT';
const TOGGLE = 'todos/TOGGLE';
const DELETE = 'todos/DELETE';

export const add = createAction(ADD, (text: string, visible: boolean) => ({
	text,
	id: cuid(),
	status: TodoStatus.Active,
	visible
}))<Todo>();

export const edit = createAction(EDIT, (id: string, text: string) => ({ id, text }))<{
	id: string;
	text: string;
}>();

export const toggle = createAction(TOGGLE, (ids: string[]) => ({ ids }))<{ ids: string[] }>();

export const deleteByIds = createAction(DELETE, (ids: string[]) => ({ ids }))<{ ids: string[] }>();
