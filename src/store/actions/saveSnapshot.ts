import { createAction } from 'redux-actions';

export enum saveSnapshotTypes {
    SAVE_PAINT_SNAPSHOT = 'SAVE_PAINT_SNAPSHOT',
    SUCCESS_SAVE_PAINT_SNAPSHOT = 'SUCCESS_SAVE_PAINT_SNAPSHOT',
}

export const successSavePaintSnapshot = createAction(saveSnapshotTypes.SUCCESS_SAVE_PAINT_SNAPSHOT);
export const SavePaintSnapshot = createAction(saveSnapshotTypes.SAVE_PAINT_SNAPSHOT);
