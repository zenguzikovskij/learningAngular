import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ItemCardComponent } from './components/item-card/item-card.component';
import { FavouriteBarComponent } from './components/favourite-bar/favourite-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ItemCardComponent,
    FavouriteBarComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatIconModule,

    ReactiveFormsModule
  ],
  exports: [ItemCardComponent, FavouriteBarComponent, SearchBarComponent]
})
export class SharedModule { }
