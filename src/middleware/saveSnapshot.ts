import { Dispatch } from 'redux';
import * as saveSnapshotService from '../services/saveSnapshot';
import * as saveSnapshotAction from '../store/actions/saveSnapshot';

export function saveSnapshot(image:string){
    return (dispatch:Dispatch)=>{
        dispatch(saveSnapshotAction.SavePaintSnapshot());
        saveSnapshotService.saveSnapshot(image).then(
            (image)=>{
                dispatch(saveSnapshotAction.successSavePaintSnapshot(image));
            })
    }
}