import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {ForecastDto, GeoCity, Coord, DayDto} from 'src/app/entities/models';
import {DayBuilder} from 'src/app/utilities/day-builder';
import {WeatherService} from 'src/app/services/weather.service';

@Component({
  selector: 'app-forecast-finder',
  templateUrl: './forecast-finder.component.html',
  styleUrls: ['./forecast-finder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastFinderComponent {

  public currentCity?: GeoCity;
  public currentForecast?: ForecastDto;
  public fiveDaysForecast?: Map<string, DayDto>;

  constructor(private weatherService: WeatherService,
              private cdr: ChangeDetectorRef) {
  }

  public proceedWithCity(city: GeoCity): void {
    this.currentCity = city;
    this.searchWeatherByCoord({lon: city.lon, lat: city.lat});
  }

  private searchWeatherByCoord(coord: Coord): void {
    this.weatherService.getWeatherFromCoord(coord).subscribe((response) => {
      this.currentForecast = response;
      this.fiveDaysForecast = DayBuilder.buildDaysMap(response);
      this.cdr.detectChanges();
    });
  }

  public clearFetchedData(): void {
    delete this.currentCity;
    delete this.currentForecast;
    delete this.fiveDaysForecast;
    this.cdr.detectChanges();
  }

}
