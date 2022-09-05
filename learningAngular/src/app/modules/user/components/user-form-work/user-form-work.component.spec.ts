import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormWorkComponent } from './user-form-work.component';

describe('UserFormWorkComponent', () => {
  let component: UserFormWorkComponent;
  let fixture: ComponentFixture<UserFormWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
