import * as auth from './authReducer';
import { combineReducers } from 'redux';
import * as userData from './userDataReducer';
import * as snapShot from './snapshotReducer';
import * as getImage from './imageReducer';

export interface AppState {
    authState: auth.State;
    userDataState: userData.State;
    snapshotState: snapShot.State;
    getImageState: getImage.State;
}

export const rootReducer = combineReducers<AppState>({
    authState: auth.authReducer,
    userDataState: userData.userDataReducer,
    snapshotState: snapShot.saveSnapshotReducer,
    getImageState: getImage.userDataReducer,
});
