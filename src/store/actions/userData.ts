import { createAction } from 'redux-actions';

export enum userDataActionTypes {
    GET_USER_DATA = 'GET_USER_DATA'
}

export const getUserDataAction=createAction(userDataActionTypes.GET_USER_DATA);