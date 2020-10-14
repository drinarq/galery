import {saveSnapshotTypes} from '../actions/saveSnapshot';
import { handleActions } from 'redux-actions';

export interface State {
    saveSnapshotError:string
}

const initialState = {
    saveSnapshotError:''
};

export const saveSnapshotReducer = handleActions<State>(
    {
        [saveSnapshotTypes.SAVE_PAINT_SNAPSHOT]: (state: State) => ({
            ...state,
        }),
        [saveSnapshotTypes.SUCCESS_SAVE_PAINT_SNAPSHOT]: (state: State) => ({
            ...state,
        })
    },
    initialState,
);
