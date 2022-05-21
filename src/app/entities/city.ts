import {Coord} from 'src/app/entities/coord';

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
