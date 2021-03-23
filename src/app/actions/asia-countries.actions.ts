import { createAction, props } from '@ngrx/store';

export const loadAsiaCountriess = createAction(
  '[AsiaCountries] Load AsiaCountriess'
);

export const loadAsiaCountriessSuccess = createAction(
  '[AsiaCountries] Load AsiaCountriess Success',
  props<{ data: any }>()
);

export const loadAsiaCountriessFailure = createAction(
  '[AsiaCountries] Load AsiaCountriess Failure',
  props<{ error: any }>()
);




