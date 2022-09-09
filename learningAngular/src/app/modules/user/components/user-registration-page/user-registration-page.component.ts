import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { UsersDataService } from '../../services/users-data.service';

import { pipe, first } from 'rxjs';

@Component({
  selector: 'app-user-registration-page',
  templateUrl: './user-registration-page.component.html',
  styleUrls: ['./user-registration-page.component.scss', '../../../../styles/styles.scss']
})
export class UserRegistrationPageComponent implements OnInit {

  constructor( private userDataService: UsersDataService, private router: Router) {}

  ngOnInit(): void {
  }

  sendNewUser(newUserObj: User) {
    this.userDataService.addUser(newUserObj)
    .pipe(
      first()
    )
    .subscribe( isAdded => {
      if (isAdded) {
        this.router.navigate(['users-list']);
      } else {
        console.log('Something went wrong', isAdded);
      }
    });
  }
}
