import * as auth from './auth';
import { combineReducers } from 'redux';
import * as userData from './userData';

export interface AppState {
    authState: auth.State;
    userdataState:userData.State;
}

export const rootReducer = combineReducers<AppState>({
    authState: auth.authReducer,
    userdataState:userData.authReducer,
});
