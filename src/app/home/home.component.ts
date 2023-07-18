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
        <!-- include a template variable in the input called #filter.-->
        <input type="text" placeholder="Filter by city" #filter />
        <!--attach an event handler to the "search" button.-->
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <!--iterate over values from the filteredLocationList array-->
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
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

  // The filteredLocationList hold the values that match the search criteria entered by the user.
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
    // filteredLocationList should contain the total set of housing locations values by default when the page loads
  }

  // This function uses the String filter function to compare the value of the text parameter against the housingLocation.city property. You can update this function to match against any property or multiple properties for a fun exercise.
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
