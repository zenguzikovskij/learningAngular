import { Injectable } from '@angular/core';
import { User } from '../../shared/interfaces/user/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  users: User[] = [
    { name: 'Joe', age: 23, isActive: true },
    { name: 'Ann', age: 12, isActive: true },
    { name: 'Michael', age: 45, isActive: false },
    { name: 'Natan', age: 31, isActive: true },
    { name: 'Hugho', age: 21, isActive: false },
    { name: 'Joe', age: 23, isActive: true },
    { name: 'Ann', age: 12, isActive: false },
    { name: 'Michael', age: 45, isActive: false },
    { name: 'Natan', age: 31, isActive: true },
    { name: 'Hugho', age: 21, isActive: false },
  ]
  
  constructor() { }

  getUsers(): User[] {
    return this.users;
  }
}
