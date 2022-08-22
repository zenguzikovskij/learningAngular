import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss', '../../../../styles/styles.scss']
})
export class CarPageComponent implements OnInit {
  value: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
