import {WeatherDto} from 'src/app/entities/weather-dto';
import {City} from 'src/app/entities/city';

export interface ForecastDto {
    cod: number,
    message: string,
    cnt: number,
    list: WeatherDto[],
    city: City
}
