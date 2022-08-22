import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarPageComponent } from './components/car-page/car-page.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CarPageComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatButtonModule
  ]
})
export class CarModule { }
