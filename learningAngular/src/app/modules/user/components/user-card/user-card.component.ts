import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/modules/shared/interfaces/user/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements OnInit {
  numberOfTicks: number = 0;

  @Input() user: User;

  constructor(private ref: ChangeDetectorRef) { 

    setInterval( () => {
      this.numberOfTicks++;
      this.ref.markForCheck();
    }, 1000);
   }

  ngOnInit(): void {
  }

  toggleUserStatus(user: User): void {
    console.log(this.numberOfTicks);
    if(user.age >= 18) {
      user.isActive = !user.isActive;
    }
  }
}
