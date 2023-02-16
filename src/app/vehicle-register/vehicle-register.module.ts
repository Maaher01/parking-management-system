import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleRegisterComponent } from './vehicle-register.component';

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
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class VehicleRegisterModule { }
