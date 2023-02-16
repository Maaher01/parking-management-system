import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { VehicleService } from '../services/vehicle/vehicle.service';

@Component({
  selector: 'app-vehicle-register',
  templateUrl: './vehicle-register.component.html',
  styleUrls: ['./vehicle-register.component.scss']
})
export class VehicleRegisterComponent {
  vehicles: any

  registerForm = this.fb.group({
    license_number: new FormControl('', [
      Validators.minLength(4), 
      Validators.maxLength(7),
      Validators.required
    ]),
    vehicle_type: new FormControl('', [
      Validators.required
    ]),
    owner_name: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(128),
      Validators.required
    ]),
    owner_phone: new FormControl('', [
      Validators.minLength(7),
      Validators.maxLength(14),
      Validators.required
    ]),
    status: new FormControl('', [
      Validators.required
    ]),
    owner_address: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(256)
    ]),
    entry_time: new FormControl('', []),
    exit_time: new FormControl('', []),
    charge: new FormControl('', [
      Validators.required
    ])
  })

  constructor(private fb: FormBuilder, private router: Router, private vehicleService: VehicleService) { }

  addVehicle() {
    let newVehicle = this.registerForm.value
    this.vehicles.push(newVehicle);
    this.vehicleService.addVehicle(newVehicle)
 }
}
