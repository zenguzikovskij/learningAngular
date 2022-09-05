import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormInfoComponent } from './user-form-info.component';

describe('UserFormInfoComponent', () => {
  let component: UserFormInfoComponent;
  let fixture: ComponentFixture<UserFormInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
