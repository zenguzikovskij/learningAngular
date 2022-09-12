import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserAddress } from '../../interfaces/userAddress.interface';

@Component({
  selector: 'app-user-form-address',
  templateUrl: './user-form-address.component.html',
  styleUrls: ['./user-form-address.component.scss']
})
export class UserFormAddressComponent implements OnInit, OnDestroy {
  @Input() addressFormControl: AbstractControl;
  @Input() index: number;
  @Output() isFormInit = new EventEmitter<boolean>(false);

  addressFormGroup: FormGroup;
  subs: Subscription = new Subscription;

  constructor() {}

  ngOnInit(): void {
    this.addressFormGroup = this.formGroup;

    let addressLine = new FormControl('', [ Validators.required ]);
    let city = new FormControl('');
    let zip = new FormControl({ value: '', disabled: true}, [ Validators.required ]);

    this.addressFormGroup.addControl('address-line', addressLine);
    this.addressFormGroup.addControl('city', city);
    this.addressFormGroup.addControl('zip', zip);

    this.subs.add(this.cityControl.valueChanges
      .subscribe( () => {
        if(this.cityControl.value) {
          this.zipControl.enable();
        } 
        else {
          this.zipControl.setValue('');
          this.zipControl.disable();
        }
      })
    );

    this.isFormInit.emit(true);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  get formGroup() { return this.addressFormControl as FormGroup; }
  get zipControl() { return this.addressFormControl.get('zip') as FormControl; }
  get cityControl() { return this.addressFormControl.get('city') as FormControl; }
}
