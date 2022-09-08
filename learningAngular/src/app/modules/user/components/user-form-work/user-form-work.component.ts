import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserWork } from '../../interfaces/userWork.interface';

@Component({
  selector: 'app-user-form-work',
  templateUrl: './user-form-work.component.html',
  styleUrls: ['./user-form-work.component.scss']
})
export class UserFormWorkComponent implements OnInit {
  @Input() userWork: FormGroup;
  @Input() activeUser?: UserWork;

  companyControl = new FormControl('', [ Validators.maxLength(35) ]);
  departmentControl = new FormControl('', [ Validators.minLength(6) ]);

  constructor() { 
  }

  ngOnInit(): void {
    this.userWork.addControl('company', this.companyControl);
    this.userWork.addControl('department', this.departmentControl);

    if(this.activeUser) {
      this.userWork.setValue(this.activeUser);
    }
  }

  get company() { return this.userWork.get('company') as FormControl };
  get department() { return this.userWork.get('department') as FormControl };

  generateError(control: FormControl): string {
    let message = '';

    if(control.hasError('required')) {
      message = message.concat('This field is required.');
    }
    if(control.hasError('min')) {
      message = message.concat(`Minimum number is ${ control.errors?.['min'].requiredLength }.`);
    }
    if(control.hasError('max')) {
      message = message.concat('This field is required');
    }
    if(control.hasError('minlength')) {
      message = message.concat(`Minimum length is ${ control.errors?.["minlength"].requiredLength }.`);
    }
    if(control.hasError('maxlength')) {
      message = message.concat(`Minimum length is ${ control.errors?.["maxlength"].requiredLength }.`);
    }
    return message;
  }

}
