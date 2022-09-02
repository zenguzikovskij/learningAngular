import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  users: User[] = [
    { id: 1, firstName: 'Joe', lastName: 'Joes', email: 'joe@joe.joe',  age: 23, gender: true, department: 'sales', company: 'CMP', imageUrl: '' },
    { id: 2, firstName: 'Hloe', lastName: 'Hloes', email: 'hloe@hloe.hloe', age: 35, gender: false, department: 'sales', company: 'CMP', imageUrl:   '' },
    { id: 3, firstName: 'Jim', lastName: 'Jims', email: 'hloe@hloe.hloe', age: 98, gender: false, department: 'manager', company: 'CMP', imageUrl:  '' },
    { id: 4, firstName: 'Nick', lastName: 'Nicks', email: 'hloe@hloe.hloe', age: 12, gender: false, department: 'sales', company: 'CMP', imageUrl:   '' },
    { id: 5, firstName: 'Helen', lastName: 'Helens', email: 'hloe@hloe.hloe', age: 31, gender: false, department: 'sales', company: 'CMP', imageUrl:  '' },
    { id: 6, firstName: 'Rick', lastName: 'Ricks', email: 'hloe@hloe.hloe', age: 25, gender: true, department: 'manager', company: 'CMP', imageUrl:  '' },
    { id: 7, firstName: 'John', lastName: 'Johns', email: 'hloe@hloe.hloe', age: 62, gender: false, department: 'sales', company: 'CMP', imageUrl:   '' },
    { id: 8, firstName: 'Amber', lastName: 'Ambers', email: 'hloe@hloe.hloe', age: 15, gender: true, department: 'sales', company: 'CMP', imageUrl:   '' },
    { id: 9, firstName: 'Hue', lastName: 'Hues', email: 'hloe@hloe.hloe', age: 23, gender: true, department: 'BI', company: 'CMP', imageUrl:        '' },
    { id: 10, firstName: 'Alfred', lastName: 'Alfreds', email: 'hloe@hloe.hloe', age: 90, gender: true, department: 'sales', company: 'CMP', imageUrl: '' },
    { id: 11, firstName: 'Joe', lastName: 'Joes', email: 'hloe@hloe.hloe', age: 64, gender: false, department: 'sales', company: 'CMP', imageUrl:   '' },
    { id: 12, firstName: 'Joe', lastName: 'Joes', email: 'hloe@hloe.hloe', age: 34, gender: false, department: 'sales', company: 'CMP', imageUrl:   '' },
    { id: 13, firstName: 'Joe', lastName: 'Joes', email: 'hloe@hloe.hloe', age: 73, gender: false, department: 'BI', company: 'CMP', imageUrl:      '' },
    { id: 14, firstName: 'Joe', lastName: 'Joes', email: 'hloe@hloe.hloe', age: 26, gender: true, department: 'sales', company: 'CMP', imageUrl:    '' },
    { id: 15, firstName: 'Joe', lastName: 'Joes', email: 'hloe@hloe.hloe', age: 94, gender: true, department: 'sales', company: 'CMP', imageUrl:    '' }
  ];
  
  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  addUser(userObj: User) {
    userObj.id = this.users.length + 1;
    this.users.push(userObj);
  }
}
