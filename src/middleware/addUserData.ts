import { Dispatch } from 'redux';
import * as getUserDataService from '../services/userData';
import * as getUserDataActions from '../store/actions/userData';

export function addUserData(){
    return (dispatch:Dispatch)=>{
        dispatch(getUserDataActions.addUserDataAction());
       getUserDataService.userData().then((fullName)=>{
           dispatch(getUserDataActions.successAddUserDataAction(fullName))
       })

    }
}
