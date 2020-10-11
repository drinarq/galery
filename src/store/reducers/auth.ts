import { AuthActionTypes } from '../actions/auth';
import { handleActions } from 'redux-actions';

export interface State {
    signInError: string;
    registerError: string;
    signOutError: string;
}

const initialState = {
    signInError: '',
    registerError: '',
    signOutError: '',
};

export const authReducer = handleActions<State>(
    {
        [AuthActionTypes.LOGIN_IN]: (state: State) => ({
            ...state,
        }),
        [AuthActionTypes.SUCCESS_LOGIN_IN]: (state: State) => ({
            ...state,
            signInError: '',
        }),
        [AuthActionTypes.REGISTER]: (state: State) => ({
            ...state,
        }),
        [AuthActionTypes.SUCCESS_REGISTER]: (state: State) => ({
            ...state,
            registerError: '',
        }),
        [AuthActionTypes.LOGOUT]: (state: State) => ({
            ...state,
        }),
        [AuthActionTypes.SUCCESS_LOGOUT]: (state: State) => ({
            ...state,
            signOutError: '',
        }),
    },
    initialState,
);
