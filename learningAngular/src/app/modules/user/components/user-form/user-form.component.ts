import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss', '../../../../styles/styles.scss']
})

export class UserFormComponent implements OnInit {
  @Output() formSubmitChange = new EventEmitter<User>();

  userForm!: FormGroup;
  removeAddress = (addressIndex: number) => {
    this.addresses.removeAt(addressIndex);
  }


  constructor( private formBuilder: FormBuilder ) {
    this.initForm();
  }

  ngOnInit(): void { 
  }

  get userInfo() { return this.userForm.get(['user', 'info']) as FormGroup; }
  get userWork() { return this.userForm.get(['user', 'work']) as FormGroup; }
  get userGroup() { return this.userForm.get('user') as FormGroup; }
  get addresses(){ return this.userForm.get(['user', 'addressArray']) as FormArray; }

  initForm() {
    this.userForm = this.formBuilder.group({
      user: this.formBuilder.group({
        info: this.formBuilder.group({}),
        work: this.formBuilder.group({}),
        addressArray: this.formBuilder.array([])
      })
    });
    this.addAddress();
  }

  addAddress(): void {
    this.addresses.push(this.formBuilder.group({}));
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
