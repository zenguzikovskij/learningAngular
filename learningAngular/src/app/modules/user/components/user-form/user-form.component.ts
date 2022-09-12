import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { UserAddress } from '../../interfaces/userAddress.interface';
import { UserInfo } from '../../interfaces/userInfo.interface';
import { UserWork } from '../../interfaces/userWork.interface';

interface segmentedUser {
  info: UserInfo,
  work: UserWork, 
  addressArray: UserAddress[]
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss', '../../../../styles/styles.scss']
})

export class UserFormComponent implements OnInit {
  @Input() activeUser?: segmentedUser;
  @Output() formSubmitChange = new EventEmitter<User>();

  userForm!: FormGroup;
  childStates: Array <boolean> = [];

  constructor( private formBuilder: FormBuilder, private readonly changeDetectorRef: ChangeDetectorRef ) {
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
  }

  //todo: change to map => (key: componentName, value: boolean)
  setInitState(index: number, state: boolean): void {
    this.childStates[index] = state;
    this.checkInitStates();
  }

  private checkInitStates(): void {
    let indexes = [0, 1, 2];
    let reducedStates = indexes.reduce( 
      (prev: boolean, cur: number) => 
        prev && this.childStates[cur],
      true);
      if(reducedStates){
        this.assignActiveUser();
      }
  }

  private assignActiveUser(): void {
    console.log('Child states are ', this.childStates);
    console.log("Active user's structure is ", this.activeUser);
    console.log("Form's structure is ", this.userGroup.value);
    if(this.activeUser){
      this.userGroup.patchValue(this.activeUser);
      // this.userGroup.setValue(this.activeUser);
      this.changeDetectorRef.detectChanges();
    }
  }

  consoleOutput(bool: any) {
    console.log(bool);
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
