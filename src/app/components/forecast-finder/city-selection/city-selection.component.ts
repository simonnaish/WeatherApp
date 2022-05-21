import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GeoCity} from 'src/app/entities/geo-city';
import {GeocodingService} from 'src/app/services/geocoding.service';

@Component({
  selector: 'app-city-selection',
  templateUrl: './city-selection.component.html',
  styleUrls: ['./city-selection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitySelectionComponent implements OnInit {

  public displayCountryInputFlag = false;
  public displayCitySelectFlag = false;
  public cityFormGroup: FormGroup;
  public foundCities: GeoCity[];

  @Output() public selectedCityEmitter: EventEmitter<GeoCity> = new EventEmitter<GeoCity>();

  constructor(private geocodingService: GeocodingService,
              private formBuilder: FormBuilder,
              private cdr: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    this.initCityFormGroup();
  }

  private initCityFormGroup(): void {
    this.cityFormGroup = this.formBuilder.group({
      cityName: ['', [Validators.required, Validators.minLength(2), Validators.max(254)]]
    });
  }

  public searchCoordByCityName(cityName: string, countryCode?: string): void {
    this.geocodingService.getCordByCityName(cityName + (countryCode ? `, ${countryCode}` : '')).subscribe(response => {
      if (response.length === 0) {
        alert('No city with this name was found');
      } else if (response.length === 1) {
        this.selectedCityEmitter.emit(response[0]);
      } else {
        this.foundCities = response;
        this.displaySelectForCity();
      }
    });
  }

  public submitSelectedCity(city: GeoCity): void {
    this.selectedCityEmitter.emit(city);
  }

  public displaySelectForCity(): void {
    this.displayCitySelectFlag = true;
    this.cdr.detectChanges();
  }

  public displayCountryInput(): void {
    this.appendCountryControlToFormGroup();
    this.displayCountryInputFlag = true;
    this.cdr.detectChanges();
  }

  private appendCountryControlToFormGroup(): void {
    this.cityFormGroup.addControl(
      'country',
      this.formBuilder.control(
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(254)]
      )
    );
  }

  public get cityNameControl(): AbstractControl {
    return this.cityFormGroup.get('cityName')!;
  }

  public get countryControl(): AbstractControl {
    return this.cityFormGroup.get('country')!;
  }

}
