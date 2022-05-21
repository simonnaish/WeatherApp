import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import {AppComponent} from 'src/app/app.component';
import {HomeComponent} from 'src/app/components/home/home.component';
import {ForecastFinderComponent} from 'src/app/components/forecast-finder/forecast-finder.component';
import {CitySelectionComponent} from 'src/app/components/forecast-finder/city-selection/city-selection.component';
import {ForecastListComponent} from 'src/app/components/forecast-finder/forecast-list/forecast-list.component';
import {StatisticsComponent} from 'src/app/components/forecast-finder/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForecastFinderComponent,
    CitySelectionComponent,
    ForecastListComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
