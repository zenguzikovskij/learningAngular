import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  users: User[] = [
    { id: 1, firstName: 'Joe', lastName: 'Joes', email: 'joe@gmail.com',  age: 23, gender: true, department: 'sales', company: 'CMP', imageUrl: '' },
    { id: 2, firstName: 'Hloe', lastName: 'Hloes', email: 'hloe@gmail.com', age: 35, gender: false, department: 'sales', company: 'CMP', imageUrl:   '' },
    { id: 3, firstName: 'Jim', lastName: 'Jims', email: 'hloe@gmail.com', age: 98, gender: false, department: 'manager', company: 'CMP', imageUrl:  '' },
    { id: 4, firstName: 'Nick', lastName: 'Nicks', email: 'hloe@gmail.com', age: 12, gender: false, department: 'sales', company: 'CMP', imageUrl:   '' },
    { id: 5, firstName: 'Helen', lastName: 'Helens', email: 'hloe@gmail.com', age: 31, gender: false, department: 'sales', company: 'CMP', imageUrl:  '' },
    { id: 6, firstName: 'Rick', lastName: 'Ricks', email: 'hloe@gmail.com', age: 25, gender: true, department: 'manager', company: 'CMP', imageUrl:  '' },
    { id: 7, firstName: 'John', lastName: 'Johns', email: 'hloe@gmail.com', age: 62, gender: false, department: 'sales', company: 'CMP', imageUrl:   '' },
    { id: 8, firstName: 'Amber', lastName: 'Ambers', email: 'hloe@gmail.com', age: 15, gender: true, department: 'sales', company: 'CMP', imageUrl:   '' },
    { id: 9, firstName: 'Hue', lastName: 'Hues', email: 'hloe@gmail.com', age: 23, gender: true, department: 'BI', company: 'CMP', imageUrl:        '' },
    { id: 10, firstName: 'Alfred', lastName: 'Alfreds', email: 'hloe@gmail.com', age: 90, gender: true, department: 'sales', company: 'CMP', imageUrl: '' },
    { id: 11, firstName: 'Joe', lastName: 'Joes', email: 'hloe@gmail.com', age: 64, gender: false, department: 'sales', company: 'CMP', imageUrl:   '' },
    { id: 12, firstName: 'Joe', lastName: 'Joes', email: 'hloe1@gmail.com', age: 34, gender: false, department: 'sales', company: 'CMP', imageUrl:   '' },
    { id: 13, firstName: 'Joe', lastName: 'Joes', email: 'hloe2@gmail.com', age: 73, gender: false, department: 'BI', company: 'CMP', imageUrl:      '' },
    { id: 14, firstName: 'Joe', lastName: 'Joes', email: 'hloe3@gmail.com', age: 26, gender: true, department: 'sales', company: 'CMP', imageUrl:    '' },
    { id: 15, firstName: 'Joe', lastName: 'Joes', email: 'hloe4@gmail.com', age: 94, gender: true, department: 'sales', company: 'CMP', imageUrl:    '' }
  ];
  
  constructor() { }

  getUsersObs(searchCriteria: string): Observable<User[]> {
    return of(searchCriteria).pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(this.getUsers.bind(this))
      );
  }

  getUsers(querySearch: string) {
    return of( 
      this.users.filter( user => this.isUserMatching(user, querySearch))
    ).pipe(delay(500));
  }

  getUserById(id: number): Observable<User | undefined> {
    return of(this.users.find( user => user.id === id)).pipe(delay(500));
  }
  
  private getUserFullName( firstName: string, lastName: string ) {
    return firstName.concat(' ', lastName).toLowerCase();
  }

  private isUserMatching(user: User, searchQuery: string) {
    return this.getUserFullName(user.firstName, user.lastName).match( RegExp(`.*${searchQuery.toLowerCase()}.*`) );
  }

  addUser(userObj: User): Observable<boolean> {
    let newUser = this.generateNewUser(userObj);
    
    let oldLength = this.users.length;
    newUser.id = oldLength + 1;
    
    return of( this.users.push(newUser) === (oldLength + 1)).pipe(delay(500));
  }

  updateUserById(id: number, userObj: User): Observable<User> {
    let updatedUser = this.generateNewUser(userObj);
    let oldUserIndex = this.users.findIndex( user => user.id === id);
    
    updatedUser.id = id;
    this.users[oldUserIndex] = updatedUser;

    console.log('generated user is', updatedUser);
    console.log('user list now is', this.users);
    
    
    return of( this.users[oldUserIndex]).pipe(delay(500));
  }

  generateNewUser(obj: {[key: string]: any} ): User {
    console.log('service got', obj);
    
    let user = obj['user'];

    let newUser = {
      id: 0,
      firstName: user['info'].firstName,
      lastName: user['info'].lastName,
      age:  user['info'].age,
      gender:  user['info'].gender,
      email:  user['info'].email,
      department:  user['work'].department,
      company:  user['work'].company,
      address: user.addressArray
    };

    return newUser;
  }

  checkUniqueness(email: string): Observable<boolean> {
    return of(
              this.users.some( user => user.email === email)
            ).pipe( delay(200) );
  }
}
