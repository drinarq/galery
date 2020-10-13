import { Dispatch } from 'redux';
import * as getUserDataService from '../services/userData';
import * as getUserDataActions from '../store/actions/userData';

export function getUserData(){
    return (dispatch:Dispatch)=>{
        dispatch(getUserDataActions.getUserDataAction());
        getUserDataService.userData().then(() => {
            dispatch(getUserDataActions.getUserDataAction());
        })
    }
}
