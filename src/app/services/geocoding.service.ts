import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UrlBuilder} from 'src/app/utilities/url-builder';
import {GeoCity} from 'src/app/entities/geo-city';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(private httpClient: HttpClient) {
  }

  public getCordByCityName(cityName: string): Observable<GeoCity[]> {
    return this.httpClient.get<GeoCity[]>(UrlBuilder.getCordsUrl(cityName));
  }
}
