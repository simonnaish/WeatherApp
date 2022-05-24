export interface ForecastDto {
    cod: number,
    message: string,
    cnt: number,
    list: WeatherDto[],
    city: City
}

export interface City {
  id: string,
  name: string,
  coord: Coord,
  country: string,
  population: number,
  timezone: number,
  sunrise: Date,
  sunset: Date
}

export interface WeatherDto {
  coord: Coord,
  weather: Weather,
  base: string,
  main: Main,
  visibility: number,
  dt_txt: string,
  timezone: number,
  id: string,
  name: string,
  code: number
}

export interface Coord {
  lon: number,
  lat: number;
}

export interface Weather {
  id: string,
  main: string,
  description: string,
  icon: string
}

export interface Main {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number
}

export interface GeoCity {
  country: string,
  lat: number,
  lon: number,
  local_names: Map<string, string>,
  name: string,
  state: string
}

export interface DayDto {
  morningTemp: number,
  dayTemp: number,
  nightTemp: number,
  humidity: number
  imageName: string;
}
