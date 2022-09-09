import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { UserAddress } from '../../interfaces/userAddress.interface';

@Component({
  selector: 'app-user-form-address-list',
  templateUrl: './user-form-address-list.component.html',
  styleUrls: ['./user-form-address-list.component.scss']
})
export class UserFormAddressListComponent implements OnInit {
  @Input() addresses: FormArray;
  @Input() parentGroup: FormGroup;
  @Input() activeUser?: UserAddress[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addAddress();
  }
  
  addAddress(): void {
    this.addresses.push(this.formBuilder.group({}));
  }

  removeAddress(addressIndex: number) {
    this.addresses.removeAt(addressIndex);
  }
}
