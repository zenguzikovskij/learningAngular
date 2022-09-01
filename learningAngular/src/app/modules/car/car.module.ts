import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarPageComponent } from './components/car-page/car-page.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarItemComponent } from './components/car-item/car-item.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CarPageComponent,
    CarListComponent,
    CarItemComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    SharedModule
  ]
})
export class CarModule { }
