import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlBuilder} from 'src/app/utilities/url-builder';
import {ForecastDto, Coord} from 'src/app/entities/models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {
  }

  public getWeatherFromCoord(coord: Coord): Observable<ForecastDto> {
    return this.httpClient.get<ForecastDto>(UrlBuilder.getWeatherUrlForCoord(coord.lon, coord.lat));
  }

}
