import { Dispatch } from 'redux';
import * as AuthService from '../services/authorization';
import * as authActions from '../store/actions/auth';
import { addUserData } from './addUserData';
import * as getUserDataActions from '../store/actions/userData';
import * as getUserDataService from '../services/userData';

export function LogIn(email: string, password: string, history: any) {
    return async (dispatch: Dispatch) => {
        dispatch(authActions.loginInAction());
        dispatch(getUserDataActions.addUserDataAction());
        AuthService.LogIN(email, password).then(() => {
            dispatch(authActions.SuccessLoginInAction());
            dispatch(authActions.isAuthorised(AuthService.getUserId()));
            getUserDataService.userData().then((fullName) => {
                dispatch(getUserDataActions.successAddUserDataAction(fullName));
            });
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

export function getUserId() {
    return (dispatch: Dispatch) => {
        const isAuth = AuthService.getUserId();
        dispatch(authActions.isAuthorised(isAuth));
    };
}
