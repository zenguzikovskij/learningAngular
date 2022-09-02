import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardTypes } from 'src/app/shared/enums/cardTemplate.types';
import { Car } from '../../interfaces/car.interface';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss', '../../../../styles/styles.scss']
})
export class CarItemComponent implements OnInit {
  @Input() car: Car;
  @Input() cardType: CardTypes;
  @Input() favourite: boolean | number;
  @Output() favouriteChange = new EventEmitter <number> ();

  cardTypesEnum = CardTypes;

  constructor() { }

  ngOnInit(): void {
  }

  processFavourite(id: number): void {
    this.favouriteChange.emit(id);
  }
}
