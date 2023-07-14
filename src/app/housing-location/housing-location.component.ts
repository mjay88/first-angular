import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  // Inputs allow components to share data. The direction of the data sharing is from parent component to child component.
  // You have to add the ! because the input is expecting the value to be passed. In this case, there is no default value. In our example application case we know that the value will be passed in - this is by design. The exclamation point is called the non-null assertion operator and it tells the TypeScript compiler that the value of this property won't be null or undefined.
  @Input() housingLocation!: HousingLocation;
}
