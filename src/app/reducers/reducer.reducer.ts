import { Action, createReducer, on } from '@ngrx/store';
import { loadAsiaCountriessSuccess } from '../actions/asia-countries.actions';
import { loadEuropeCountriessSuccess } from '../actions/europe-countries.actions';
import { loadRegionsSuccess } from '../actions/region.actions';


export const reducerFeatureKey = 'reducer';

export interface AppState {
  regions: string[];
  defaultRegion: string;
  selectLocationResult: Location[];
}

export const initialState: AppState = {
  regions: ['asia', 'europe'],
  defaultRegion: 'asia',
  selectLocationResult: []
};

const mainReducer = createReducer(
  initialState,
  on(loadEuropeCountriessSuccess, (state, payload) =>  ({ ...state, selectLocationResult : payload.data })),
  on(loadAsiaCountriessSuccess, (state, payload) => ({ ...state, selectLocationResult : payload.data }))
);

export function exposedReducer(state: AppState, action: Action): AppState {
  return mainReducer(state, action);
}
