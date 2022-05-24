import {ForecastDto, DayDto} from 'src/app/entities/models';

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
    dailyMap.forEach(value => {
        value.imageName = this.getImageNameByTemperature(value, value?.dayTemp ? 'dayTemp' : value?.morningTemp ? 'morningTemp' : 'nightTemp');
      }
    );
    return dailyMap;
  }

  private static getImageNameByTemperature(day: DayDto, param: 'morningTemp' | 'dayTemp' | 'nightTemp'): string {
    if (day[param] < -10) {
      return 'temp_1.jpg';
    }
    if (day[param] <= 0) {
      return 'temp_2.jpg';
    }
    if (day[param] < 15) {
      if (day.humidity > 60) {
        return 'temp_3.jpg';
      } else {
        return 'temp_4.jpg';
      }
    }
    if (day[param] < 25) {
      return 'temp_5.jpg';
    }

    if (day[param] >= 25) {
      return 'temp_6.jpg';
    }
    return '';
  }

  // Assumptions: 6 <= hour < 12 -> morning; 12 <= hour < 21 -> day; 21 <= hour <  6 -> night;
  private static getDayTime(dt_txt: string): 'morningTemp' | 'dayTemp' | 'nightTemp' {
    let hour = Number(dt_txt.split(' ')[1].split(':')[0]);
    return (hour >= 6 && hour < 12) ? 'morningTemp' : (hour >= 12 && hour < 21) ? 'dayTemp' : 'nightTemp';
  }

}
