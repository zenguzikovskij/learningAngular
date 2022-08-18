import { Component, ɵtransitiveScopesFor } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learningAngular';
  
  pages = [
    { number: 1, destination: 'Car', address: '/car'},
    { number: 2, destination: 'User', address: '/user' }
  ];
}
