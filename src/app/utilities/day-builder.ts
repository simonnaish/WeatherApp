import {ForecastDto} from "../entities/forecast-dto";
import {DayDto} from "../entities/day-dto";
import {Calculations} from "./calculations";

export class DayBuilder {

  static buildDaysMap(forecast: ForecastDto): Map<string, DayDto> {
    let dailyMap: Map<string, DayDto> = new Map<string, DayDto>();
    for (let weather of forecast.list) {
      if (weather.dt_txt) {
        let date = Calculations.convertTimestampToStringDate(weather.dt_txt);
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

  private static getDayTime(dt_txt: string): 'morningTemp' | 'dayTemp' | 'nightTemp' {
    let stringTime = Calculations.convertTimestampToStringTime(dt_txt);
    let hour = Number(stringTime.split(':')[0]);
    if ((hour >= 6 && hour < 12 && stringTime.endsWith('AM'))) {
      return 'morningTemp'
    }
    if ((hour === 12 && stringTime.endsWith('AM'))
      || (hour < 9 && stringTime.endsWith('PM'))) {
      return 'dayTemp';
    }
    return 'nightTemp';
  }

}
