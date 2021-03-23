import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from '../reducers/reducer.reducer';
const appKey = 'count';
export const currentStateSelector =  (appState) => appState;

export const getRegiontSelector = createSelector (
    currentStateSelector,
    (appState: fromReducer.AppState) => appState[appKey].regions
);
