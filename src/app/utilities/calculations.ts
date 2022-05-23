import {ForecastDto} from 'src/app/entities/models';
import {TemperatureType} from 'src/app/entities/temperature-type';

export class Calculations {

  public static getMeanValueTemperatureFromForecast(forecast: ForecastDto, valueName: TemperatureType): number {
    if (!forecast?.list || forecast?.list?.length === 0) {
      return 0;
    }
    return forecast.list
        .map(weatherDto => weatherDto.main[valueName])
        .reduce((sum, temp) => sum + temp, 0)
      / forecast.list.length
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

  public static getMaxTemperatureValue(forecast: ForecastDto): number {
    let maxTemperature = forecast?.list[0].main.temp_max ?? 0;
    forecast?.list.forEach(weather => {
      if (weather.main.temp_max > maxTemperature) {
        maxTemperature = weather.main.temp_max;
      }
    });
    return maxTemperature;
  }

  public static getMinTemperatureValue(forecast: ForecastDto): number {
    let minTemperature = forecast?.list[0].main.temp_min ?? 0;
    forecast?.list.forEach(weather => {
      if (weather.main.temp_min < minTemperature) {
        minTemperature = weather.main.temp_min;
      }
    });
    return minTemperature;
  }

}
