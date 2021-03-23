import { createAction, props } from '@ngrx/store';

export const loadEuropeCountriess = createAction(
  '[EuropeCountries] Load EuropeCountriess'
);


export const loadEuropeCountriessSuccess = createAction(
  '[EuropeCountries] Load EuropeCountriess Success',
  props<{ data: Location[] }>()
);

export const loadEuropeCountriessFailure = createAction(
  '[EuropeCountries] Load EuropeCountriess Failure',
  props<{ error: Location[] }>()
);



