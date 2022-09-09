import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardTypes } from '../../enums/cardTemplate.types';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() imageUrl?: string;
  @Input() favourite: boolean | number;
  @Input() usageType?: CardTypes;
  @Output() favouriteChange = new EventEmitter <string> ();
  
  cardTypesEnum = CardTypes;
  

  constructor() {}

  ngOnInit(): void {}

  addToFavourites(): void {
    this.favouriteChange.emit('clicked');
  }
}
