import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './components/user-page/user-page.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersDataService } from './services/users-data.service';
import { UserListComponent } from './components/user-list/user-list.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { FavouritesService } from '../../shared/services/favourites.service';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserRoutingModule } from './user-routing.module';
import { MatInputModule } from '@angular/material/input';
import { UserRegistrationPageComponent } from './components/user-registration-page/user-registration-page.component';
import { UserListPageComponent } from './components/user-list-page/user-list-page.component';

@NgModule({
  declarations: [
    UserPageComponent,
    UserCardComponent,
    UserListComponent,
    UserRegistrationComponent,
    UserRegistrationPageComponent,
    UserListPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,

    SharedModule,
    UserRoutingModule,
  ],
  providers: [
    UsersDataService,
    FavouritesService
  ]
})
export class UserModule { }
