import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serviceUrl } from 'src/app/config';
@Injectable()
export class EuropeService {
  constructor(private httpClient: HttpClient) { }

  public getLocations(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(serviceUrl + 'region/europe');
  }
}
