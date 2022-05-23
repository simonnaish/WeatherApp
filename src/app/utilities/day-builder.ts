import {ForecastDto} from 'src/app/entities/forecast-dto';
import {DayDto} from 'src/app/entities/day-dto';

export class DayBuilder {

  public static buildDaysMap(forecast: ForecastDto): Map<string, DayDto> {
    let dailyMap: Map<string, DayDto> = new Map<string, DayDto>();
    for (let weather of forecast.list) {
      if (weather.dt_txt) {
        let date = weather.dt_txt.split(' ')[0];
        let dayTime = this.getDayTime(weather.dt_txt);
        let mapObject: DayDto;
        if (dailyMap.has(date)) {
          mapObject = dailyMap.get(date)!;
          if (mapObject[dayTime]) {
            mapObject[dayTime] = (mapObject[dayTime] + weather.main.temp) / 2;
          } else {
            mapObject[dayTime] = weather.main.temp;
          }

          if (mapObject.humidity) {
            mapObject.humidity = (mapObject.humidity + weather.main.humidity) / 2;
          } else {
            mapObject.humidity = weather.main.humidity;
          }

        } else {
          mapObject = {} as DayDto;
          mapObject[dayTime] = weather.main.temp;
          mapObject.humidity = weather.main.humidity;
        }

        dailyMap.set(date, mapObject);
      }
    }
    return dailyMap;
  }

  // Assumptions: 6 <= hour < 12 -> morning; 12 <= hour < 21 -> day; 21 <= hour <  6 -> night;
  private static getDayTime(dt_txt: string): 'morningTemp' | 'dayTemp' | 'nightTemp' {
    let hour = Number(dt_txt.split(' ')[1].split(':')[0]);
    return (hour >= 6 && hour < 12) ? 'morningTemp' : (hour >= 12 && hour < 21) ? 'dayTemp' : 'nightTemp';
  }

}
