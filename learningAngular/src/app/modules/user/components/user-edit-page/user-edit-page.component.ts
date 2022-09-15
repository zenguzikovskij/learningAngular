import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { objectAny } from 'src/app/shared/interfaces/objectAny.interface';
import { RouteGuardObject } from 'src/app/shared/interfaces/routeGuardObject.interface';
import { User } from '../../interfaces/user.interface';
import { UserAddress } from '../../interfaces/userAddress.interface';
import { UserInfo } from '../../interfaces/userInfo.interface';
import { UserWork } from '../../interfaces/userWork.interface';
import { UsersDataService } from '../../services/users-data.service';
import { UserFormComponent } from '../user-form/user-form.component';
 
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
  @ViewChild(UserFormComponent) userForm: UserFormComponent; 
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

  canEscape(): RouteGuardObject {
    if( this.userForm.userForm.dirty ) {
      console.log('returning is dirty');
      return {
        value: true, 
        msg: 'You have some unsaved changes.\nDo you really want to leave?'
      };
    } else {
      console.log('returning is not dirty');
      return {
        value: false,
        msg: ''
      };
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

    let addr: UserAddress[];
    if(!serverUser['address']) {
      addr = [ { "address-line": '', city: '', zip: '' } ];
    } else {
      addr = serverUser['address'].map( (singleAddr: UserAddress) => {
        return {
          'address-line': singleAddr['address-line'] ? singleAddr['address-line'] : '', 
          city: singleAddr.city ? singleAddr.city : '', 
          zip: singleAddr.zip ? singleAddr.zip : ''}
      });
    }

    return { info, work, addressArray: addr };
  }

}
