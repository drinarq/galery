import { getImageActionTypes } from '../actions/getImage';
import { handleActions } from 'redux-actions';
import { AnyAction } from 'redux';

export interface State {
    images: string[];
}
const initialState = {
    images: [],
};

export const userDataReducer = handleActions<State>(
    {
        [getImageActionTypes.SUCCESS_GET_IMAGE]: (state: State, action: AnyAction) => ({
            ...state,
            images: action.payload,
        }),
    },
    initialState,
);
