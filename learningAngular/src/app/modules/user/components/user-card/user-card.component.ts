import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss', '../../../../styles/styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  @Input() cardType: string;
  @Input() favourite: boolean | number;

  @Output() favouriteChange = new EventEmitter <number> ();
  
  numberOfTicks: number = 0;

  constructor(private ref: ChangeDetectorRef) { 

    setInterval( () => {
      this.numberOfTicks++;
      this.ref.markForCheck();
    }, 1000);
   }

  ngOnInit(): void {
  }

  processFavourite(id: number): void {
    this.favouriteChange.emit(id);
  }

}
