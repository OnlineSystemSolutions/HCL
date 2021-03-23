import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../reducers/reducer.reducer';

const appKey = 'count';
export const currentStateSelector = (state: AppState) => state;

export const getLocationResultSelector = createSelector (
    currentStateSelector,
    (state) => state[appKey].selectLocationResult
);

export const getCurrentRegionSelector = createSelector (
    currentStateSelector,
    (state: AppState) => state[appKey].regions
    );
