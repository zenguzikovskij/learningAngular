import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAddress } from '../../interfaces/userAddress.interface';

@Component({
  selector: 'app-user-form-address',
  templateUrl: './user-form-address.component.html',
  styleUrls: ['./user-form-address.component.scss']
})
export class UserFormAddressComponent implements OnInit {
  @Input() addressFormControl: AbstractControl;
  @Input() index: number;
  @Input() activeUser?: UserAddress[];

  addressFormGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.addressFormGroup = this.formGroup;

    let addressLine = new FormControl('', [ Validators.required ]);
    let city = new FormControl('');
    let zip = new FormControl('');

    this.addressFormGroup.addControl('address-line', addressLine);
    this.addressFormGroup.addControl('city', city);
    this.addressFormGroup.addControl('zip', zip);
    this.zipControl.disable();

    this.cityControl.valueChanges.subscribe( () => {
      if(this.cityControl.value) {
        this.zipControl.setValidators( [Validators.required] );
        this.zipControl.enable();
      } 
      else {
        this.zipControl.setValue('');
        this.zipControl.clearValidators();
        this.zipControl.disable();
      }
    });
    if(this.activeUser && this.activeUser[0]['address-line']) {
      this.addressFormGroup.setValue(this.activeUser);
    }
  }

  get formGroup() { return this.addressFormControl as FormGroup; }
  get zipControl() { return this.addressFormControl.get('zip') as FormControl; }
  get cityControl() { return this.addressFormControl.get('city') as FormControl; }
}
