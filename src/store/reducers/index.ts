import * as auth from './auth';
import { combineReducers } from 'redux';

export interface AppState {
    authState: auth.State;
}

export const rootReducer = combineReducers<AppState>({
    authState: auth.authReducer,
});
