import { createAction } from 'typesafe-actions';

const SET_EDITING_ON = 'SET_EDITING_ON';
const SET_EDITING_OFF = 'SET_EDITING_OFF';
const SET_VALUE = 'SET_VALUE';

export const setEditingOn = createAction(SET_EDITING_ON)();
export const setEditingOff = createAction(SET_EDITING_OFF, (value: string) => value)();
export const setValue = createAction(SET_VALUE, (value: string) => value)();
