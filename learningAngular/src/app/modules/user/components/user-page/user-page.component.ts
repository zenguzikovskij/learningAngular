import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersDataService } from '../../../appointment/services/users-data.service';
import { User } from 'src/app/modules/shared/interfaces/user/user.interface';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss', '../../../../styles/styles.scss', ]
})
export class UserPageComponent implements OnInit {
  users: User[] = [];
  buttonState: Boolean = false;
  @ViewChild(UserCardComponent) userComponent: UserCardComponent;

  toggleButton(): void {
    this.buttonState = !this.buttonState;
    console.log('toggled');
  }

  deactivateUsers(): void {
    this.users
      .filter(user => user.isActive === true)
      .forEach(user => {
        this.userComponent.toggleUserStatus(user);
      });
  }

  constructor(private service: UsersDataService) {  }

  ngOnInit(): void {
    this.users = this.service.getUsers();
  }

}
