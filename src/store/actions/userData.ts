import { createAction } from 'redux-actions';

export enum userDataActionTypes {
    ADD_USER_DATA = 'ADD_USER_DATA',
    SUCCESS_ADD_DATA='SUCCESS_ADD_DATA'
}

export const successAddUserDataAction=createAction(userDataActionTypes.SUCCESS_ADD_DATA,(payload:string)=>payload);
export const addUserDataAction=createAction(userDataActionTypes.ADD_USER_DATA);