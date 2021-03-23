import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EuropeService } from './service/europe.service';
import { AsiaService } from './service/asia.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MultipleSelectComponent, } from './presentation/muitple-select/multiple-select.component';
import { CountryDetailsComponent } from './presentation/country-details/country-details.component';
import { LocationContainerPageComponent } from './location-container-page/location-container-page.component';
import { EffectsModule, EffectsRunner } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { exposedReducer } from './reducers/reducer.reducer';
import { AsiaEffects } from './effects/asia.effects';
import { EuropeEffects } from './effects/europe.effects';

@NgModule({
  declarations: [
    AppComponent,
    MultipleSelectComponent,
    CountryDetailsComponent,
    LocationContainerPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    EffectsModule.forRoot([AsiaEffects, EuropeEffects]),
    StoreModule.forRoot({ count: exposedReducer }),
  ],
  providers: [ EuropeService, AsiaService, EffectsRunner ],
  bootstrap: [AppComponent]
})
export class AppModule { }
