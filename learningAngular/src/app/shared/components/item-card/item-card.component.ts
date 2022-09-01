import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() id: number;
  @Input() imageUrl?: string;
  @Input() favourite: boolean | number;
  @Input() usageType?: string;
  @Output() favouriteChange = new EventEmitter <number> ();

  constructor() {}

  ngOnInit(): void {  }

  addToFavourites(id: number): void {
    this.favouriteChange.emit(id);
  }
}
