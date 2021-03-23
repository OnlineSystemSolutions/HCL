import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/model/location';
@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent {
  constructor() { }
  @Input() countryDetail: Location;
}
