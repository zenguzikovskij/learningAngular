import { Component, ɵtransitiveScopesFor } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learningAngular';
  
  pages = [
    { number: 1, destination: 'First page', address: '/page/1'},
    { number: 2, destination: 'Second page', address: '/page/2' }
  ];
}
