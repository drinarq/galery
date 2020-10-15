import { Dispatch } from 'redux';
import * as AuthService from '../services/authorization';
import * as authActions from '../store/actions/auth';

export  function LogIn(email: string, password: string, history: any) {
    return async(dispatch: Dispatch) => {
        dispatch(authActions.loginInAction());
       await AuthService.LogIN(email, password).then(() => {
            dispatch(authActions.SuccessLoginInAction());
            history.push('/paint');
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

export function LogOut(history: any) {
    return (dispatch: Dispatch) => {
        dispatch(authActions.LogoutAction());
        AuthService.Logout().then(() => {
            dispatch(authActions.SuccessLogoutAction());
            history.push('/');
        });
    };
}

export function isAuthorized() {
    return (dispatch: Dispatch) => {
       const isAuth= AuthService.isAuthorized();
       dispatch(authActions.isAuthorised(isAuth))
        }
    }