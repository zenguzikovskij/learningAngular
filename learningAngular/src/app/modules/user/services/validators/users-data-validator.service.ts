import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { UsersDataService } from '../users-data.service';

@Injectable({
  providedIn: 'root'
})
export class UsersDataValidatorService {

  constructor(
    private usersDataService: UsersDataService
    ) {  }

  ValidateEmail( control: AbstractControl): { emailPattern: { pattern: string, actual: string } } | null {    
    if( !control.value.endsWith('@gmail.com')) {
        return { emailPattern: { pattern: '@gmail.com', actual: control.value } };
    } else {
        return null
    }
  }

  isUnique(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.usersDataService.checkUniqueness(control.value).pipe(map(
      ( isUnique: boolean ) => {                
        return isUnique ? { 'isEmailUnique': { unique: false} } : null;
      }
    ));
  };

}
