import { createSelector } from 'reselect';
import * as auth from '../store/reducers/authReducer';
import { AppState } from '../store/reducers';

const isAuthorisedSelector = (state: AppState): auth.State => state.authState;

export const selectGetUserIdState = createSelector(isAuthorisedSelector, (state) => state.getUserId);
