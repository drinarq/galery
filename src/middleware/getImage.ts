import { Dispatch } from 'redux';
import * as getImageService from '../store/services/getImageService';
import * as getImageActions from '../store/actions/imageActions';

export function getImage() {
    return (dispatch: Dispatch): void => {
        dispatch(getImageActions.GetImageAction());
        getImageService.getImage().then((images) => {
            dispatch(getImageActions.successGetImageAction(images));
        });
    };
}
