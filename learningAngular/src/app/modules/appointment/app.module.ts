import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';

import { UserModule } from '../user/user.module';
import { CarModule } from '../car/car.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    AppRoutingModule,
    UserModule,
    CarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 }
