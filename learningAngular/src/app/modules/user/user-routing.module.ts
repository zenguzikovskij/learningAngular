import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListPageComponent } from './components/user-list-page/user-list-page.component';

import { UserPageComponent } from './components/user-page/user-page.component';
import { UserRegistrationPageComponent } from './components/user-registration-page/user-registration-page.component';

const routes: Routes = [
  {
    path: '', 
    component: UserPageComponent,
    children: [

      {
        path: 'users-list',
        title: 'Users List',
        component: UserListPageComponent
      },

      {
        path: 'user-registration',
        title: 'Register User',
        component: UserRegistrationPageComponent
      },

      {
        path: '',
        redirectTo: 'users-list',
        pathMatch: 'full'
      }

    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
