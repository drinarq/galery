import { Dispatch } from 'redux';
import * as getUserDataService from '../store/services/userDataService';
import * as getUserDataActions from '../store/actions/userDataActions';

export function addUserData() {
    return (dispatch: Dispatch): void => {
        dispatch(getUserDataActions.addUserDataAction());
        getUserDataService.userData().then((fullName) => {
            dispatch(getUserDataActions.successAddUserDataAction(fullName));
        });
    };
}
