import { createAction } from 'redux-actions';

export enum AuthActionTypes {
    LOGIN_IN = '[Auth] LOGIN_IN',
    SUCCESS_LOGIN_IN = ' SUCCESS_LOGIN_IN',
    // ERROR_LOGIN_IN = ' ERROR_LOGIN_IN',

    REGISTER = ' REGISTER',
    SUCCESS_REGISTER = ' SUCCESS_REGISTER',
    //   ERROR_REGISTER = ' ERROR_REGISTER',

    LOGOUT = ' LOGOUT',
    SUCCESS_LOGOUT = ' SUCCESS_LOGOUT',
    //   ERROR_LOGOUT = ' ERROR_LOGOUT',
}

export const loginInAction = createAction(AuthActionTypes.LOGIN_IN);
export const SuccessLoginInAction = createAction(AuthActionTypes.SUCCESS_LOGIN_IN);

export const RegisterAction = createAction(AuthActionTypes.REGISTER);
export const SuccessRegisterAction = createAction(AuthActionTypes.SUCCESS_REGISTER);

export const LogoutAction = createAction(AuthActionTypes.LOGOUT);
export const SuccessLogoutAction = createAction(AuthActionTypes.SUCCESS_LOGOUT);
