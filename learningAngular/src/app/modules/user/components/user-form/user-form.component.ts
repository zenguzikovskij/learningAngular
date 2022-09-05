import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { UsersDataService } from '../../services/users-data.service';
import { EmailValidator } from '../../services/validators/email.validator';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss', '../../../../styles/styles.scss']
})

export class UserFormComponent implements OnInit {
  @Output() formSubmitChange = new EventEmitter<User>();

  userForm!: FormGroup;

  firstName = new FormControl('', [ Validators.required ]);
  lastName = new FormControl('', [ Validators.required ]);
  gender = new FormControl(true, [ Validators.required ]);
  company = new FormControl('', [ Validators.maxLength(35) ]);
  department = new FormControl('', [ Validators.minLength(6) ]);
  age = new FormControl(15, [
      Validators.required,
      Validators.min(15),
      Validators.max(100)]);
  email = new FormControl('', [
      Validators.required,
      Validators.email,
      EmailValidator.ValidateEmail],
      [ EmailValidator.isUnique(this.userService) ]);

  constructor( private formBuilder: FormBuilder, private userService: UsersDataService ) { 
    this.userForm = this.formBuilder.group({
      userInfo: this.formBuilder.group({
          firstName: this.firstName,
          lastName: this.lastName,
          age: this.age,
          email: this.email,
          gender: this.gender,
      }),
      userWork: this.formBuilder.group({
          company: this.company,
          department: this.department
      })
    });
  }

  ngOnInit(): void {  
  }

  get getUserInfoGroup(): FormGroup {
    return this.userForm.get('userInfo') as FormGroup;
  }

  get getUserWorkGroup(): FormGroup {
    return this.userForm.get('userWork') as FormGroup;
  }

  onSubmit(): void {
    if(this.userForm.valid) {
      console.log('attempt to submit form', this.userForm.value);
      let newUser = this.userForm.value;
      this.formSubmitChange.emit(newUser);
      
    } else {
      this.userForm.markAllAsTouched();

      console.log('Please fill the form');
    }
  }
}
