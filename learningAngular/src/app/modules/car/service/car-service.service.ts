import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Car } from '../interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  private cars: Car[] = [
    {id: 1, name: 'Ford', color: 'Blue', releaseYear: 2004, number: 3, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 2, name: 'Nissan', color: 'Yellow', releaseYear: 1993, number: 2, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 3, name: 'Toyota', color: 'Blue', releaseYear: 2004, number: 31, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 4, name: 'Nissan', color: 'Red', releaseYear: 1995, number: 4, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 5, name: 'Ford', color: 'Blue', releaseYear: 2004, number: 5, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 6, name: 'Nissan', color: 'Purple', releaseYear: 1981, number: 7, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 7, name: 'Toyota', color: 'Grey', releaseYear: 2004, number: 8, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 8, name: 'Nissan', color: 'Black', releaseYear: 2004, number: 1, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 9, name: 'Ford', color: 'Blue', releaseYear: 2013, number: 2, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 10, name: 'Ford', color: 'Grey', releaseYear: 2003, number: 12, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 11, name: 'Toyota', color: 'Grey', releaseYear: 2009, number: 34, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 12, name: 'Toyota', color: 'Black', releaseYear: 2004, number: 23, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 13, name: 'Toyota', color: 'Black', releaseYear: 1962, number: 98, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 14, name: 'Ford', color: 'Grey', releaseYear: 2004, number: 6, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 15, name: 'Ford', color: 'Blue', releaseYear: 1984, number: 7, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 16, name: 'Nissan', color: 'Grey', releaseYear: 1999, number: 9, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 17, name: 'Nissan', color: 'Black', releaseYear: 2007, number: 31, imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  ]
  constructor() { }

  getCars(): Observable<Car[]> {
    return of(this.cars).pipe(delay(500));
  }
}
