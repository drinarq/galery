import { Dispatch } from 'redux';
import * as AuthService from '../store/services/authorizationService';
import * as authActions from '../store/actions/authActions';
import * as getUserDataActions from '../store/actions/userDataActions';
import * as getUserDataService from '../store/services/userDataService';
import { History, LocationState } from 'history';

export function LogIn(email: string, password: string, history: History<LocationState>) {
    return async (dispatch: Dispatch): Promise<void> => {
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

export function registration(
    email: string,
    name: string,
    surname: string,
    password: string,
    history: History<LocationState>,
) {
    return (dispatch: Dispatch): void => {
        dispatch(authActions.RegisterAction());
        AuthService.registration(email, name, surname, password).then(() => {
            dispatch(authActions.SuccessRegisterAction());
            history.push('/');
        });
    };
}

export function LogOut(history: History<LocationState>) {
    return (dispatch: Dispatch): void => {
        dispatch(authActions.LogoutAction());
        AuthService.Logout().then(() => {
            dispatch(authActions.SuccessLogoutAction());
            history.push('/');
        });
    };
}

export function getUserId() {
    return (dispatch: Dispatch): void => {
        const isAuth = AuthService.getUserId();
        dispatch(authActions.isAuthorised(isAuth));
    };
}
