import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learningAngular';
  
  pages = [
    { number: 1, destination: 'Car', address: '/cars'},
    { number: 2, destination: 'User', address: '/users' },
    { number: 3, destination: 'Registration', address: '/users/user-registration' },
    { number: 4, destination: 'Edit User', address: 'user/edit/1' },
  ];
}
