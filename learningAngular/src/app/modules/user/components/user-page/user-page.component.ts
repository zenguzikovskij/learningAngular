import { Component, OnInit } from '@angular/core';

interface User {
  name: String,
  age: Number,
  isActive: boolean
}

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss', '../../../../styles/styles.scss', ]
})
export class UserPageComponent implements OnInit {
  users: User[] = [
    { name: 'Joe', age: 23, isActive: true },
    { name: 'Ann', age: 12, isActive: false },
    { name: 'Michael', age: 45, isActive: false },
    { name: 'Natan', age: 31, isActive: true },
    { name: 'Hugho', age: 21, isActive: false },
    { name: 'Joe', age: 23, isActive: true },
    { name: 'Ann', age: 12, isActive: false },
    { name: 'Michael', age: 45, isActive: false },
    { name: 'Natan', age: 31, isActive: true },
    { name: 'Hugho', age: 21, isActive: false },
  ]


  buttonState: Boolean = false;

  toggleButton() {
    this.buttonState = !this.buttonState;
    console.log('toggled');
    
  }

  toggleUserStatus(user: User) {
    let userIndex = this.users.indexOf(user);
    this.users[userIndex].isActive = !this.users[userIndex].isActive;
    console.log(this.users);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
