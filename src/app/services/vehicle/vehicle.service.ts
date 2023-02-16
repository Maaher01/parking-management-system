import { Injectable } from '@angular/core';
import { Init } from 'src/app/data/vehicles'

@Injectable({
  providedIn: 'root'
})
export class VehicleService extends Init {

  constructor() {
    super()
    this.load()
   }

  addVehicle(newVehicle: any) {
    let vehicles = JSON.parse(localStorage.getItem('vehicles') || '{}');
    // Add New Vehicle
    vehicles.push(newVehicle);
    // Set New Vehicle
    localStorage.setItem('vehicles', JSON.stringify(vehicles));
 }
}
