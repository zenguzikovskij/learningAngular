import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  @Input()
  pageNumber: Number;

  constructor() { 
    this.pageNumber = new Number;
   }

  ngOnInit(): void {
    console.log('Initialising page with number ', this.pageNumber);
  }

}
