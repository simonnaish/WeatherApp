import {API_KEY_ARG, DEFAULT_RECORDS_LIMIT, GEO_API_URL, WEATHER_API_URL} from 'src/app/utilities/constants';

export class UrlBuilder {

  public static getWeatherUrlForCoord(lon: number, lat: number): string {
    return WEATHER_API_URL() + `lon=${lon}&lat=${lat}&units=metric&limit=${DEFAULT_RECORDS_LIMIT}&${API_KEY_ARG()}`;
  }

  public static getCordsUrl(cityName: string): string {
    return GEO_API_URL() + `q=${cityName}&limit=${DEFAULT_RECORDS_LIMIT}&${API_KEY_ARG()}`
  }

}
