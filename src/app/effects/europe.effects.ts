import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { loadEuropeCountriess, loadEuropeCountriessSuccess } from '../actions/europe-countries.actions';
import { EuropeService } from '../service/europe.service';

@Injectable()
export class EuropeEffects {
  europeEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[EuropeCountries] Load EuropeCountriess'),
      mergeMap(() => this.europeService.getLocations()
        .pipe(
          map((data) => {
            return loadEuropeCountriessSuccess({data});
          }
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private europeService: EuropeService) {}
}
