import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serviceUrl } from '../config';

@Injectable()
export class AsiaService {
  constructor(private httpClient: HttpClient) { }

  public getLocations(): Observable<Location[]> {
    // const header = this.getHeader();
    return this.httpClient.get<Location[]>(serviceUrl + 'region/asia');
  }
}
