import { AuthActionTypes } from '../actions/auth';
import { handleActions } from 'redux-actions';
import {AnyAction} from "redux";
import setRef from "@material-ui/core/utils/setRef";

export interface State {
    signInError: string;
    registerError: string;
    signOutError: string;
    isAuthorized:string|undefined,
}

const initialState = {
    signInError: '',
    registerError: '',
    signOutError: '',
    isAuthorized:undefined,
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
        [AuthActionTypes.IS_AUTHORIZED]: (state: State,action:AnyAction) => ({
            ...state,
            uid:action.payload,
        }),
    },
    initialState,
);
