import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DayDto} from 'src/app/entities/models';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastListComponent {

  @Input() public fiveDaysForecast: Map<string, DayDto>;

}
