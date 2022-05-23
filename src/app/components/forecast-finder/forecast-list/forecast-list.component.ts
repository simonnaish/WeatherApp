import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {DayDto} from 'src/app/entities/models';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastListComponent {

  @Input() public fiveDaysForecast: Map<string, DayDto>;
  public selectedDay?: string;

  constructor(private cdr: ChangeDetectorRef) {
  }

  public setSelectedDay(key: string): void {
    if (key !== this.selectedDay) {
      this.selectedDay = key;
    } else {
      delete this.selectedDay;
    }
    this.cdr.detectChanges();
  }

}
