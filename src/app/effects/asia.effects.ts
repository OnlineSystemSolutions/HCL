import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AsiaService } from '../service/asia.service';
import { map, mergeMap } from 'rxjs/operators';
import { loadAsiaCountriessSuccess } from '../actions/asia-countries.actions';

@Injectable()
export class AsiaEffects {
  asiaEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[AsiaCountries] Load AsiaCountriess'),
      mergeMap(() => this.asiaService.getLocations()
        .pipe(
          map((data) => loadAsiaCountriessSuccess({data})
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private asiaService: AsiaService) {}
}


