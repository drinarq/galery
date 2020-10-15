import { Dispatch } from 'redux';
import * as getImageService from '../services/getImage';
import * as getImageActions from '../store/actions/getImage';

export function getImage(){
    return (dispatch:Dispatch)=>{
        dispatch(getImageActions.GetImageAction());
        getImageService.getImage().then((images)=>{
            dispatch(getImageActions.successGetImageAction(images))
        })

    }
}
