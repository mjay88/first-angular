// Interfaces are custom data types for your app.
//an interface to define properties that represent data about a single housing location.
export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
