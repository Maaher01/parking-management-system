import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleRegisterComponent } from './vehicle-register.component';

import { MatFormFieldModule } from '@angular/material/form-field'

const routes: Routes = [
  { path: 'register', component: VehicleRegisterComponent }
]

@NgModule({
  declarations: [
    VehicleRegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    RouterModule
  ]
})
export class VehicleRegisterModule { }
