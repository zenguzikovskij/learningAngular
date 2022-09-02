import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardTypes } from 'src/app/shared/enums/cardTemplate.types';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss', '../../../../styles/styles.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
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
