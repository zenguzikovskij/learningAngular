import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, map } from 'rxjs';

import { UsersDataService } from "../users-data.service";

export class EmailValidator {

    constructor(){}

    static ValidateEmail( control: AbstractControl): { emailPattern: { pattern: string, actual: string } } | null {
        if( !control.value.endsWith('@gmail.com')) {
            return { emailPattern: { pattern: '@gmail.com', actual: control.value } };
        } else {
            return null
        }
    }

    static isUnique(userService: UsersDataService): AsyncValidatorFn {
        return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
          return userService.checkUniqueness(control.value).pipe(map(
            ( isUnique: boolean ) => {                
              return isUnique ? { 'isEmailUnique': { unique: false} } : null;
            }
          ));
        };
    }
}