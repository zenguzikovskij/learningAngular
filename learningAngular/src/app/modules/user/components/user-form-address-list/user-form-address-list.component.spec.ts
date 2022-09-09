import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormAddressListComponent } from './user-form-address-list.component';

describe('UserFormAddressListComponent', () => {
  let component: UserFormAddressListComponent;
  let fixture: ComponentFixture<UserFormAddressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormAddressListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormAddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
