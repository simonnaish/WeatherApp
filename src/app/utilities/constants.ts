export const API_URL = 'https://api.openweathermap.org/';
export const WEATHER_API_SPEC = 'data';
export const GEO_API_SPEC = 'geo';
export const WEATHER_API_SEARCH = 'forecast';
export const GEO_API_SEARCH = 'direct';
export const WEATHER_API_VERSION = '2.5';
export const GEO_API_VERSION = '1.0';
export const API_KEY = '6e216d83e64db57258698f9fc2ab5b5d';
export const DEFAULT_RECORDS_LIMIT = 10;
export const API_KEY_ARG: () => string = () => {
  return 'appid=' + API_KEY
};
export const WEATHER_API_URL: () => string = () => {
  return API_URL + WEATHER_API_SPEC + '/' + WEATHER_API_VERSION + '/' + WEATHER_API_SEARCH + '?';
}
export const GEO_API_URL: () => string = () => {
  return API_URL + GEO_API_SPEC + '/' + GEO_API_VERSION + '/' + GEO_API_SEARCH + '?';
}
