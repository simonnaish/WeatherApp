import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DayDto} from 'src/app/entities/day-dto';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastListComponent {

  @Input() public fiveDaysForecast: Map<string, DayDto>;

}
