import { AuthActionTypes } from '../actions/authActions';
import { handleActions } from 'redux-actions';
import { AnyAction } from 'redux';

export interface State {
    signInError: string;
    registerError: string;
    signOutError: string;
    getUserId: string | undefined;
}

const initialState = {
    signInError: '',
    registerError: '',
    signOutError: '',
    getUserId: '',
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
        [AuthActionTypes.GET_USER_ID]: (state: State, action: AnyAction) => ({
            ...state,
            getUserId: action.payload,
        }),
    },
    initialState,
);
