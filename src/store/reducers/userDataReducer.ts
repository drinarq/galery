import { userDataActionTypes } from '../actions/userDataActions';
import { handleActions } from 'redux-actions';
import { AnyAction } from 'redux';

export interface State {
    userData: string;
}
const initialState = {
    userData: '',
};

export const userDataReducer = handleActions<State>(
    {
        [userDataActionTypes.SUCCESS_ADD_DATA]: (state: State, action: AnyAction) => ({
            ...state,
            userData: action.payload,
        }),
    },
    initialState,
);
