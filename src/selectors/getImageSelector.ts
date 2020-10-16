import { createSelector } from 'reselect';
import * as getImage from '../store/reducers/imageReducer';
import { AppState } from '../store/reducers';

const getImageSelector = (state: AppState): getImage.State => state.getImageState;

export const selectImage = createSelector(getImageSelector, (state) => state);
