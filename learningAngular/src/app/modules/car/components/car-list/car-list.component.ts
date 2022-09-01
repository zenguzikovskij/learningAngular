import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../../interfaces/car.interface';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss', '../../../../styles/styles.scss']
})
export class CarListComponent implements OnInit {
  @Input() cars: Car[];
  @Input() cardType: string;
  @Input() favourite: boolean | number;
  @Input() favouriteList?: Car[];
  @Output() favouriteChange = new EventEmitter <number> ();

  constructor() { }

  ngOnInit(): void {
  }

  furtherProcessFavourite(id: number): void {
    this.favouriteChange.emit(id);
  }
}
