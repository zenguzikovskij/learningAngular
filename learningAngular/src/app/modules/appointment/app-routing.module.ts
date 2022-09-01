import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarPageComponent } from '../car/components/car-page/car-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { 
    path: 'cars', 
    component: CarPageComponent 
  },
  { 
    path: 'users', 
    loadChildren: () => import('../user/user.module').then( module => module.UserModule ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };