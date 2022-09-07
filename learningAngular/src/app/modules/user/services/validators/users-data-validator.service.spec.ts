import { TestBed } from '@angular/core/testing';

import { UsersDataValidatorService } from './users-data-validator.service';

describe('UsersDataValidatorService', () => {
  let service: UsersDataValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersDataValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
