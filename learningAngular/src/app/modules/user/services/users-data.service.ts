import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, switchMap, first, last, filter } from 'rxjs/operators';
import { PaginatorData } from 'src/app/shared/interfaces/paginatorData.interface';

import { ConfigService } from '../../core/config/config.service';

import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  users: User[] = [
    { 
      id: 1, 
      firstName: 'Joe', 
      lastName: 'Joes', 
      email: 'joe@gmail.com',  
      age: 23, 
      gender: true, 
      department: 'sales', 
      company: 'CMP', 
      imageUrl: '' 
    }
  ];
  hasData: boolean = false;
  
  constructor( private config: ConfigService ) { 
    this.downloadRandomUsers();
  }
  
  private getUserFullName( firstName: string, lastName: string ) {
    return firstName.concat(' ', lastName).toLowerCase();
  }

  private isUserMatching(user: User, searchQuery: string) {
    
    return this.getUserFullName(user.firstName, user.lastName).match( RegExp(`.*${searchQuery.toLowerCase()}.*`) );
  }

  private downloadRandomUsers(): void {
    let httpObs: Observable<ArrayBuffer>;
    let response: { [key: string]: any };
    let params = {
      'per_page': ['20'],
      'q': ['a'],
    };
    httpObs = this.config.getData('https://api.github.com/search/users', params );
    httpObs
    .pipe(
      first()
    )
    .subscribe( resp => {
      response = resp;
      this.processServerData(response['items']);
    });
  }

  processServerData(rawUsers: Array< { [key: string]: any } >): void {
    rawUsers.forEach( userToProcess => {
      let obs = this.processUserInstance(userToProcess['url']);
      obs.subscribe( rawUser => {
        let user: User
        user = this.restructureRawUser(rawUser, userToProcess['id']);
        this.users.push(user);
        this.hasData = true;
      });
    });
  }

  private processUserInstance(url: string): Observable <ArrayBuffer> {
    let httpObs = this.config.getData(url);
    return httpObs;
  }

  private restructureRawUser(rawUser: {[key: string]: any}, index: number): User {
    let firstName = rawUser['name'].split(' ')[0];
    let lastName = rawUser['name'].split(' ')[1];
    let age = rawUser['followers'] % 100;
    let gender = Math.random() % 10 > 5 ? true : false;
    let email = firstName + lastName + '@gmail.com';

    const newUser: User = {
      id: index,
      firstName: firstName,
      lastName: lastName,
      age: age,
      gender: gender,
      email: email,
      department: '',
      company: '',
      imageUrl: rawUser['avatar_url'],
      address: [ 
        {
          'address-line': rawUser['location'],
          city: '',
          zip: ''
        }
      ]
    }
    return newUser;
  }

  getUsersObs(searchCriteria: string, pagination?: PaginatorData): Observable<Object> {
    let params = {
      search: searchCriteria,
      pagination: pagination
    }
    
    if (this.hasData) {
      return of(params)
        .pipe(
          switchMap( params => this.getUsers(params.search, params.pagination))
        );
    } else {
      return of([]);
    }
    
  }

  getUsers(querySearch: string, pagination?: PaginatorData): Observable<{}> {
    let filteredUsers: User[];
    let response: Object;

    if (pagination) {
      let begin = pagination.pageIndex * pagination.pageSize;
      let finish = begin + pagination.pageSize;

      filteredUsers = this.users
        .filter( user => this.isUserMatching(user, querySearch));

      response = {
        data: filteredUsers.slice(begin, finish),
        length: filteredUsers.length
      }
    } else {
      filteredUsers = this.users
        .filter( user => this.isUserMatching(user, querySearch));
      response = {
        data: filteredUsers,
        length: filteredUsers.length
      }
    }
    
    return of( 
      response
    ).pipe(delay(500));
  }

  getUserById(id: number): Observable<User | undefined> {
    return of(this.users.find( user => user.id === id)).pipe(delay(500));
  }

  addUser(userObj: User): Observable<boolean> {
    let newUser = this.generateNewUser(userObj);
    
    let oldLength = this.users.length;
    newUser.id = oldLength + 1;

    this.users.push(newUser);
    
    return of( true).pipe(delay(500));
  }

  updateUserById(id: number, userObj: User): Observable<User> {
    let updatedUser = this.generateNewUser(userObj);
    let oldUserIndex = this.users.findIndex( user => user.id === id);
    
    updatedUser.id = id;
    this.users[oldUserIndex] = updatedUser;
    
    
    return of( this.users[oldUserIndex]).pipe(delay(500));
  }

  generateNewUser(obj: {[key: string]: any} ): User {
    
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
