import {Clouds} from 'src/app/entities/clouds';
import {Coord} from 'src/app/entities/coord';
import {Weather} from 'src/app/entities/weather';
import {Main} from 'src/app/entities/main';
import {Wind} from 'src/app/entities/wind';
import {Sys} from 'src/app/entities/sys';

export interface WeatherDto {
  coord: Coord,
  clouds: Clouds,
  weather: Weather,
  base: string,
  main: Main,
  visibility: number,
  wind: Wind,
  dt_txt: string,
  sys: Sys,
  timezone: number,
  id: string,
  name: string,
  code: number
}
