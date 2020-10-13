import { userDataActionTypes } from '../actions/userData';
import { handleActions } from 'redux-actions';

export interface State {
    getUserDataError:string
}
const initialState={
    getUserDataError:'',
};

export const authReducer = handleActions<State>(
    {
        [userDataActionTypes.GET_USER_DATA]: (state: State) => ({
            ...state,
        }),
    },
    initialState,
);
