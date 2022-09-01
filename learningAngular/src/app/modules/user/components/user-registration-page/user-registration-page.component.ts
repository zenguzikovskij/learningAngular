import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UsersDataService } from '../../services/users-data.service';

@Component({
  selector: 'app-user-registration-page',
  templateUrl: './user-registration-page.component.html',
  styleUrls: ['./user-registration-page.component.scss', '../../../../styles/styles.scss']
})
export class UserRegistrationPageComponent implements OnInit {

  constructor( private userDataService: UsersDataService) {}

  ngOnInit(): void {
  }

  sendNewUser(newUserObj: User) {
    this.userDataService.addUser(newUserObj);
  }
}
