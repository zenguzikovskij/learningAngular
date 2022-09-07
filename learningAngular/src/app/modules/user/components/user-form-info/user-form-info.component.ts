import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersDataValidatorService } from '../../services/validators/users-data-validator.service';

@Component({
  selector: 'app-user-form-info',
  templateUrl: './user-form-info.component.html',
  styleUrls: ['./user-form-info.component.scss', '../../../../styles/styles.scss']
})
export class UserFormInfoComponent implements OnInit {
  @Input() userInfo: FormGroup;

  firstNameControl = new FormControl('', [ Validators.required ]);
  lastNameControl = new FormControl('', [ Validators.required ]);
  genderControl = new FormControl(true, [ Validators.required ]);
  ageControl = new FormControl(15, [
      Validators.required,
      Validators.min(15),
      Validators.max(100)]);
  emailControl = new FormControl('', [
      Validators.required,
      Validators.email,
      this.usersDataValidator.ValidateEmail],
      [ this.usersDataValidator.isUnique.bind(this.usersDataValidator) ]);

  constructor(private usersDataValidator: UsersDataValidatorService) {
    
  }

  ngOnChanges(): void {}

  ngOnInit(): void {
    this.userInfo.addControl('firstName', this.firstNameControl);
    this.userInfo.addControl('lastName', this.lastNameControl);
    this.userInfo.addControl('gender', this.genderControl);
    this.userInfo.addControl('age', this.ageControl);
    this.userInfo.addControl('email', this.emailControl);
  }

  get firstName(): FormControl { return this.userInfo.get('firstName') as FormControl };
  get lastName(): FormControl { return this.userInfo.get('lastName') as FormControl };
  get age(): FormControl { return this.userInfo.get('age') as FormControl };
  get email(): FormControl { return this.userInfo.get('email') as FormControl };
  get gender(): FormControl { return this.userInfo.get('gender') as FormControl };

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
