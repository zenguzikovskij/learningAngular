import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form-address-list',
  templateUrl: './user-form-address-list.component.html',
  styleUrls: ['./user-form-address-list.component.scss']
})
export class UserFormAddressListComponent implements OnInit {
  @Input() addresses: FormArray;
  @Input() parentGroup: FormGroup;
  @Input() numberOfAddresses?: number;
  @Output() isFormInit = new EventEmitter <boolean> (false);

  childStates: Array <boolean>;

  constructor(private formBuilder: FormBuilder,  private readonly changeDetectorRef: ChangeDetectorRef ) { 
    this.childStates = new Array(this.numberOfAddresses);
    if(this.numberOfAddresses){
      this.childStates.forEach( state => this.addAddress() );
    }
  }

  ngOnInit(): void {
    this.addAddress();
    
  }

  setInitState(index: number, state: boolean): void {
    this.childStates[index] = state;
    this.checkInitStates();
  }

  private checkInitStates(): void {
    let reducedStates = this.childStates.reduce( 
      (prev: boolean, cur: boolean) => 
        prev && cur,
      true);
    if (this.numberOfAddresses) {
      this.addresses.enable();
    }

    if (reducedStates) {
      this.isFormInit.emit(true);
    }
  }
  
  addAddress(): void {
    this.addresses.push(this.formBuilder.group({}));
    this.changeDetectorRef.detectChanges();
  }

  removeAddress(addressIndex: number) {
    this.addresses.removeAt(addressIndex);
    this.changeDetectorRef.detectChanges();
  }
}
