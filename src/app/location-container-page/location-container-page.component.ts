import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { loadAsiaCountriess } from '../actions/asia-countries.actions';
import { loadEuropeCountriess } from '../actions/europe-countries.actions';
import { FormConfig } from '../model/forms/form-config';
import * as fromStore from '../reducers/reducer.reducer';
import { getRegiontSelector } from '../selectors/get-regions.selectors';
import { getCurrentRegionSelector, getLocationResultSelector } from '../selectors/location.selectors';

@Component({
  selector: 'app-location-container-page',
  templateUrl: './location-container-page.component.html',
  styleUrls: ['./location-container-page.component.scss']
})
export class LocationContainerPageComponent implements OnInit {
  region$: Observable<string[]>;
  locationResult$: Observable<Location[]>;
  form: FormGroup;
  country: Location;
  currentRegion$: Observable<string>;
  regionSelected: any;

  constructor(private store: Store<fromStore.AppState>, fb: FormBuilder) {
    this.form = fb.group(FormConfig.locationFormConfig());
   }

  ngOnInit(): void {
    this.region$ = this.store.pipe(select(getRegiontSelector));
    this.locationResult$ = this.store.pipe(select(getLocationResultSelector));
    this.currentRegion$ = this.store.pipe(select(getCurrentRegionSelector));

    this.form.controls.region.valueChanges.subscribe((selectedValue) => {
      this.regionSelected = this.form.controls?.region?.value ? this.form.controls.region.value.toString() : '';
      if (this.regionSelected === 'asia') {
        this.store.dispatch(loadAsiaCountriess());
      } else {
        this.store.dispatch(loadEuropeCountriess());
      }
    });
    this.form.controls.country.valueChanges.subscribe((selectedValue: Location) => {
        this.country = selectedValue;
    });
  }
}
