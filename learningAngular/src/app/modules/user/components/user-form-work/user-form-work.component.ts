import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form-work',
  templateUrl: './user-form-work.component.html',
  styleUrls: ['./user-form-work.component.scss']
})
export class UserFormWorkComponent implements OnInit {
  @Input() userWorkGroup: FormGroup;

  constructor() { 
   }

  ngOnInit(): void {
  }

  get company() { return this.userWorkGroup.get('company') as FormControl };
  get department() { return this.userWorkGroup.get('department') as FormControl };

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
