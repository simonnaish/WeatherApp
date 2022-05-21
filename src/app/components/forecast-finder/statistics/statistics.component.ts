import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ForecastDto} from 'src/app/entities/forecast-dto';
import {GeoCity} from 'src/app/entities/geo-city';
import {Calculations} from 'src/app/utilities/calculations';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent implements OnInit {

  @Input() public currentForecast: ForecastDto;
  @Input() public currentCity: GeoCity;

  constructor(private cdr: ChangeDetectorRef) {
  }

  public meanTemperature: string;
  public modeTemperature: string;
  public maxTemperature: string;
  public minTemperature: string;

  public ngOnInit(): void {
    this.meanTemperature = this.getMeanTemperatureValue();
    this.modeTemperature = this.getModeTemperatureValue();
    this.minTemperature = this.getMinTemperatureValue();
    this.maxTemperature = this.getMaxTemperatureValue();
    this.cdr.detectChanges();
  }

  private getMeanTemperatureValue(): string {
    return Calculations.getMeanValueTemperatureFromForecast(this.currentForecast, 'temp').toFixed(2);
  }

  private getModeTemperatureValue(): string {
    return Calculations.getModeValueTemperatureFromForecast(this.currentForecast, 'temp').toFixed(2);
  }

  private getMaxTemperatureValue(): string {
    return Calculations.getModeValueTemperatureFromForecast(this.currentForecast, 'temp').toFixed(2);
  }

  private getMinTemperatureValue(): string {
    return Calculations.getModeValueTemperatureFromForecast(this.currentForecast, 'temp').toFixed(2);
  }

}
