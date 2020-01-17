import { createSelector } from 'reselect';
import { prop, replace } from 'ramda';
import { RootState } from '~/store/root-reducer';

export const getRouter = (state: RootState) => state.router;
export const getAction = createSelector(getRouter, prop('action'));
export const getLocation = createSelector(getRouter, prop('location'));
export const getPathname = createSelector(getLocation, prop('pathname'));
export const getPathnameStatus = createSelector(getPathname, replace('/', ''));
