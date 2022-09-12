import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { objectAny } from 'src/app/shared/interfaces/objectAny.interface';
import { User } from '../../interfaces/user.interface';
import { UserAddress } from '../../interfaces/userAddress.interface';
import { UserInfo } from '../../interfaces/userInfo.interface';
import { UserWork } from '../../interfaces/userWork.interface';
import { UsersDataService } from '../../services/users-data.service';

interface segmentedUser {
  info: UserInfo,
  work: UserWork, 
  addressArray: UserAddress[]
}

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.scss', '../../../../styles/styles.scss']
})

export class UserEditPageComponent implements OnInit, OnDestroy {
  isLoaded: boolean = false;

  userId: number;
  userObject: segmentedUser;

  subs: Subscription = new Subscription;

  constructor(
    private route: ActivatedRoute, 
    private usersDataService: UsersDataService,
    private router: Router
    ) { }

  ngOnInit(): void {  
    this.subs.add( this.route.params
      .pipe(first())
      .subscribe( params => {
        this.userId = +params['id'];
        console.log('Got', this.userId);

        this.usersDataService.getUserById(this.userId)
          .pipe( first() )
          .subscribe( user => {
            if (user) {
              this.userObject = this.separateUserLogic(user);
            } else {
              console.log('Failed to load user');
            }
            console.log(this.userObject);

            this.isLoaded = true;
          });
      })
    );
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  canEscape(): boolean {
    let message = 'You have some unsaved changes.\nDo you want to leave the page?'
    if (confirm(message)) {
      return true;
    } else {
      return false;
    }
  }

  sendUpdatedUser(newUserObj: User) {
    this.usersDataService.updateUserById(this.userId, newUserObj)
      .subscribe( isAdded => isAdded ? this.router.navigate(['users-list']) : console.log('Something went wrong', isAdded) );
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

    return { info, work, addressArray: [addr] };
  }

}
