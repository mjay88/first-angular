// This will import the inject function into the HomeComponent class.
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
//this is the imported data injected
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      >
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
//component definition
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  // Dependency injection is the mechanism that manages the dependencies of an app's components and the services that other components can use.
  housingService: HousingService = inject(HousingService);
  //The constructor is the first function that runs when this component is created. The code in the constructor will assign the housingLocationList the value returned from the call to getAllHousingLocations.
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
