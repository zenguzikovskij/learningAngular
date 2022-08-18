import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarPageComponent } from '../car/components/car-page/car-page.component';
import { UserPageComponent } from '../user/components/user-page/user-page.component';

const routes: Routes = [
  {path: 'car', component: CarPageComponent},
  {path: 'user', component: UserPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }