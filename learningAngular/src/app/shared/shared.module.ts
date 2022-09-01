import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ItemCardComponent } from './components/item-card/item-card.component';
import { FavouriteBarComponent } from './components/favourite-bar/favourite-bar.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ItemCardComponent,
    FavouriteBarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [ItemCardComponent, FavouriteBarComponent]
})
export class SharedModule { }
