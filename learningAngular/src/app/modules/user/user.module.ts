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
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersDataService } from './services/users-data.service';
import { UserListComponent } from './components/user-list/user-list.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { FavouritesService } from '../../shared/services/favourites.service';
import { UserRoutingModule } from './user-routing.module';
import { UserRegistrationPageComponent } from './components/user-registration-page/user-registration-page.component';
import { UserListPageComponent } from './components/user-list-page/user-list-page.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserFormInfoComponent } from './components/user-form-info/user-form-info.component';
import { UserFormWorkComponent } from './components/user-form-work/user-form-work.component';
import { UserFormAddressComponent } from './components/user-form-address/user-form-address.component';
import { UserEditPageComponent } from './components/user-edit-page/user-edit-page.component';

@NgModule({
  declarations: [
    UserPageComponent,
    UserCardComponent,
    UserListComponent,
    UserRegistrationPageComponent,
    UserListPageComponent,
    UserFormComponent,
    UserFormInfoComponent,
    UserFormWorkComponent,
    UserFormAddressComponent,
    UserEditPageComponent,
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
    MatProgressSpinnerModule,

    SharedModule,
    UserRoutingModule,
  ],
  providers: [
    UsersDataService,
    FavouritesService
  ]
})
export class UserModule { }
