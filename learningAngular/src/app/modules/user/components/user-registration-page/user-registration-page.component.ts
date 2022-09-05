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
    let newUser = {
      id: 0,
      firstName: obj['userInfo'].firstName,
      lastName: obj['userInfo'].lastName,
      age:  obj['userInfo'].age,
      gender:  obj['userInfo'].gender,
      email:  obj['userInfo'].email,
      department:  obj['userWork'].department,
      company:  obj['userWork'].company,
    };

    return newUser;
  }
}
