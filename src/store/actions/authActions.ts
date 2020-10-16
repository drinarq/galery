import { createAction } from 'redux-actions';

export enum AuthActionTypes {
    LOGIN_IN = 'LOGIN_IN',
    SUCCESS_LOGIN_IN = ' SUCCESS_LOGIN_IN',

    REGISTER = ' REGISTER',
    SUCCESS_REGISTER = ' SUCCESS_REGISTER',

    LOGOUT = ' LOGOUT',
    SUCCESS_LOGOUT = ' SUCCESS_LOGOUT',

    GET_USER_ID = ' GET_USER_ID',
}

export const loginInAction = createAction(AuthActionTypes.LOGIN_IN);
export const SuccessLoginInAction = createAction(AuthActionTypes.SUCCESS_LOGIN_IN);

export const RegisterAction = createAction(AuthActionTypes.REGISTER);
export const SuccessRegisterAction = createAction(AuthActionTypes.SUCCESS_REGISTER);

export const LogoutAction = createAction(AuthActionTypes.LOGOUT);
export const SuccessLogoutAction = createAction(AuthActionTypes.SUCCESS_LOGOUT);

export const isAuthorised = createAction(AuthActionTypes.GET_USER_ID, (payload: string | undefined) => payload);
