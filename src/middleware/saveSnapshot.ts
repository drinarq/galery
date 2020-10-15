import { Dispatch } from 'redux';
import * as saveSnapshotService from '../services/saveSnapshot';
import * as saveSnapshotAction from '../store/actions/saveSnapshot';
import * as snapshotToGalleryService from '../services/snapshotToGallery'

export function saveSnapshot(image:string){
    return (dispatch:Dispatch)=>{
        dispatch(saveSnapshotAction.SavePaintSnapshot());
        saveSnapshotService.saveSnapshot(image).then(
            (image)=>{
                dispatch(saveSnapshotAction.successSavePaintSnapshot(image));
            })
    }
}

export function saveSnapshotToGallery(image:string){
    return (dispatch:Dispatch)=>{
        dispatch(saveSnapshotAction.SavePaintSnapshot());
        snapshotToGalleryService.saveSnapshot(image).then(
            (image)=>{
                dispatch(saveSnapshotAction.successSavePaintSnapshot(image));
            })
    }
}
