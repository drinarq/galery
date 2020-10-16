import { Dispatch } from 'redux';
import * as saveSnapshotService from '../store/services/snapshotService';
import * as saveSnapshotAction from '../store/actions/snapshotActions';
import * as snapshotToGalleryService from '../store/services/snapshotToGalleryService';

export function saveSnapshot(image: string) {
    return (dispatch: Dispatch): void => {
        dispatch(saveSnapshotAction.SavePaintSnapshot());
        saveSnapshotService.saveSnapshot(image).then((image) => {
            dispatch(saveSnapshotAction.successSavePaintSnapshot(image));
        });
    };
}

export function saveSnapshotToGallery(image: string) {
    return (dispatch: Dispatch): void => {
        dispatch(saveSnapshotAction.SavePaintSnapshot());
        snapshotToGalleryService.saveSnapshot(image).then((image) => {
            dispatch(saveSnapshotAction.successSavePaintSnapshot(image));
        });
    };
}
