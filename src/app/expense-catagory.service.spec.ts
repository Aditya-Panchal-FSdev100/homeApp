import { TestBed } from '@angular/core/testing';

import { ExpenseCatagoryService } from './expense-catagory.service';

describe('ExpenseCatagoryService', () => {
  let service: ExpenseCatagoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseCatagoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
