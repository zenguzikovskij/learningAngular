import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { objectAny } from 'src/app/shared/interfaces/objectAny.interface';
import { UserAddress } from '../../interfaces/userAddress.interface';
import { UserInfo } from '../../interfaces/userInfo.interface';
import { UserWork } from '../../interfaces/userWork.interface';
import { UsersDataService } from '../../services/users-data.service';

interface segmentedUser {
  info: UserInfo,
  work: UserWork, 
  addr: UserAddress[]
}

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.scss', '../../../../styles/styles.scss']
})

export class UserEditPageComponent implements OnInit {
  isLoaded: boolean = false;

  userId: number;
  userObject: segmentedUser;

  constructor(private route: ActivatedRoute, private usersDataService: UsersDataService) { }

  ngOnInit(): void {  
    this.route.params.pipe(first()).subscribe( params => {
      this.userId = +params['id'];
      console.log('Got', this.userId);

      this.usersDataService.getUserById(this.userId).pipe(first()).subscribe( user => {
  
        user ? this.userObject = this.separateUserLogic(user) : console.log('Failed to load user');
        console.log(this.userObject);

        this.isLoaded = true;
      })
    })
  }

  separateUserLogic( serverUser: objectAny ): segmentedUser {
    let info = {
      'firstName': serverUser['firstName'],
      'lastName': serverUser['lastName'],
      'age': serverUser['age'],
      'gender': serverUser['gender'],
      'email': serverUser['email'],
    };

    let work = {
      'department': serverUser['department'],
      'company': serverUser['company']
    };

    let addr: UserAddress;
    serverUser['address'] ? addr = serverUser['address'] : addr = { "address-line": '' };

    return { info, work, addr: [addr] };
  }

}
