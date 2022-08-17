import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  @Input()
  pageNumber: Number;

  constructor() { 
    this.pageNumber = new Number;
   }

  ngOnInit(): void {
    console.log('Initialising page with number ', this.pageNumber);
  }

}
