import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form-info',
  templateUrl: './user-form-info.component.html',
  styleUrls: ['./user-form-info.component.scss', '../../../../styles/styles.scss']
})
export class UserFormInfoComponent implements OnInit {
  @Input() userInfoGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  get firstName(): FormControl { return this.userInfoGroup.get('firstName') as FormControl };
  get lastName(): FormControl { return this.userInfoGroup.get('lastName') as FormControl };
  get age(): FormControl { return this.userInfoGroup.get('age') as FormControl };
  get email(): FormControl { return this.userInfoGroup.get('email') as FormControl };
  get gender(): FormControl { return this.userInfoGroup.get('gender') as FormControl };

  generateError(control: FormControl): string {
    let message = '';    

    if(control.hasError('required'))      { message = message.concat('This field is required. '); }
    if(control.hasError('min'))           { message = message.concat(`Minimum number is ${ control.errors?.['min'].min }. `); }
    if(control.hasError('max'))           { message = message.concat(`Minimum number is ${ control.errors?.['max'].max }. `); }
    if(control.hasError('minlength'))     { message = message.concat(`Minimum length is ${ control.errors?.["minlength"].requiredLength }. `); }
    if(control.hasError('maxlength'))     { message = message.concat(`Minimum length is ${ control.errors?.["maxlength"].requiredLength }. `); }
    if(control.hasError('email'))         { message = message.concat(`Email must be of me@gmail.com. `); }
    if(control.hasError('emailPattern'))  { message = message.concat(`Email must include ${ control.errors?.["emailPattern"].pattern }. `); }
    if(control.hasError('isEmailUnique')) { message = message.concat(`Email is already registered`); }

    return message;
  }
}
