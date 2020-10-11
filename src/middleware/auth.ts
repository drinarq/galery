import { Dispatch } from 'redux';
import * as AuthService from '../services/authorization';
import * as authActions from '../store/actions/auth';

export function signIn(email: string, password: string, history: any) {
    return (dispatch: Dispatch) => {
        dispatch(authActions.loginInAction());
        AuthService.LogIN(email, password).then(() => {
            dispatch(authActions.SuccessLoginInAction());
            history.push('/');
        });
    };
}

export function registration(email: string, name: string, surname: string, password: string, history: any) {
    return (dispatch: Dispatch) => {
        dispatch(authActions.RegisterAction());
        AuthService.registration(email, name, surname, password).then(() => {
            dispatch(authActions.SuccessRegisterAction());
            history.push('/');
        });
    };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function signOut(history: any) {
    return (dispatch: Dispatch) => {
        dispatch(authActions.LogoutAction());
        AuthService.Logout().then(() => {
            dispatch(authActions.SuccessLogoutAction());
            history.push('/');
        });
    };
}