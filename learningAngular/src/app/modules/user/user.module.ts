import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './components/user-page/user-page.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UsersDataService } from '../appointment/services/users-data.service';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [
    UserPageComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    UsersDataService
  ]
})
export class UserModule { }
