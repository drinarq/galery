import { createAction } from 'redux-actions';

export enum getImageActionTypes {
    GET_IMAGE = 'GET_IMAGE',
    SUCCESS_GET_IMAGE='SUCCESS_GET_IMAGE'
}

export const successGetImageAction=createAction(getImageActionTypes.SUCCESS_GET_IMAGE,(payload:unknown[])=>payload);
export const GetImageAction=createAction(getImageActionTypes.GET_IMAGE);