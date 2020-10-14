import * as auth from './auth';
import { combineReducers } from 'redux';
import * as userData from './userData';
import * as snapShot from './saveSnapshot'



export interface AppState {
    authState: auth.State;
    userDataState:userData.State;
    snapshotState:snapShot.State;
}

export const rootReducer = combineReducers<AppState>({
    authState: auth.authReducer,
    userDataState:userData.userDataReducer,
    snapshotState:snapShot.saveSnapshotReducer,
});
