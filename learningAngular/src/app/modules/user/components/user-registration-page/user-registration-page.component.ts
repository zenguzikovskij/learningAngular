import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { UsersDataService } from '../../services/users-data.service';

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
    let userToSubmit = this.generateNewUser(newUserObj);

    this.userDataService.addUser(userToSubmit)
      .subscribe( isAdded => isAdded ? this.router.navigate(['users-list']) : console.log('Something went wrong', isAdded) );
  }

  generateNewUser(obj: {[key: string]: any} ): User {
    let user = obj['user'];

    let newUser = {
      id: 0,
      firstName: user['info'].firstName,
      lastName: user['info'].lastName,
      age:  user['info'].age,
      gender:  user['info'].gender,
      email:  user['info'].email,
      department:  user['work'].department,
      company:  user['work'].company,
    };

    return newUser;
  }
}
