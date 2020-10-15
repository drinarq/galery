import { createSelector } from 'reselect';
import * as userData from '../store/reducers/userData';
import { AppState } from '../store/reducers';

const userDataSelector = (state: AppState): userData.State => state.userDataState;

export const selectUserData = createSelector(userDataSelector, (state) => state);
