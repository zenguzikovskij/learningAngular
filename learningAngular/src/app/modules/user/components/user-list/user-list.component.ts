import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardTypes } from 'src/app/shared/enums/cardTemplate.types';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss', '../../../../styles/styles.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: User[];
  @Input() cardType: CardTypes;
  @Input() favourite: boolean | number;
  @Input() favouriteList?: User[];
  
  @Output() favouriteChange = new EventEmitter <number> ();
  
  constructor() { }

  ngOnInit(): void {  }

  furtherProcessFavourite(id: number): void {
    this.favouriteChange.emit(id);
  }
}
