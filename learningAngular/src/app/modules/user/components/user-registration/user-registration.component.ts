import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { UserFormGroup } from '../../interfaces/userFormGroup.interface';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss', '../../../../styles/styles.scss']
})
export class UserRegistrationComponent implements OnInit {
  @Output() formSubmitChange = new EventEmitter<User>();
  userForm: UserFormGroup;

  constructor( private formBuilder: FormBuilder ) {
    this.userForm = this.formBuilder.group({
      id: [0],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [0, Validators.required],
      email: ['', Validators.required],
      gender: [false, Validators.required],
  
      company: ['', Validators.required],
      department: ['', Validators.required]
    }) as UserFormGroup;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.userForm.valid) {
      console.log('attempt to submit form');

      let newUser = this.userForm.value;

      newUser.id = 0;
      newUser.gender = Boolean(Number(newUser.gender));

      this.formSubmitChange.emit(newUser);
      this.userForm.reset();
      //TODO: ADD REDIRECTION TO USER LIST
    } else {
      console.log('Please fill the form');
    }
  }
}
