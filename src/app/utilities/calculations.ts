import {ForecastDto} from "../entities/forecast-dto";
import {TemperatureType} from "../entities/temperature-type";

export class Calculations {

  public static getMeanValueTemperatureFromForecast(forecast: ForecastDto, valueName: TemperatureType): number {
    let temperatureSum = 0;
    if (!forecast?.list || forecast?.list?.length === 0) {
      return 0;
    }
    forecast.list.forEach(weather => {
      temperatureSum += weather.main[valueName];
    })
    return temperatureSum / forecast.list.length;
  }

  public static getModeValueTemperatureFromForecast(forecast: ForecastDto, valueName: TemperatureType): number {
    let occurrenceMap: Map<string, number> = new Map<string, number>();
    let highestOccurrence = 0;
    let modeValue: number = forecast.list[0]?.main[valueName];
    forecast.list.forEach(weather => {
      let key = weather.main[valueName];
      let alreadyOccurred = (occurrenceMap.get(key.toString()) ?? 0) + 1;
      occurrenceMap.set(key.toString(), alreadyOccurred);
      if (alreadyOccurred > highestOccurrence) {
        highestOccurrence = alreadyOccurred;
        modeValue = key;
      }
    });
    return modeValue ?? 0;
  }

  public static convertTimestampToStringDate(timestamp: string): string {
    let date = new Date(timestamp.replace(' ', 'T'));
    return date.toLocaleDateString('en-US');
  }

  public static convertTimestampToStringTime(timestamp: string): string {
    let date = new Date(timestamp.replace(' ', 'T'));
    let stringArr = date.toLocaleTimeString('en-US').split(' ');
    return stringArr[0].split(':').splice(0, 2).join(':') + stringArr[1].toString();
  }

}
