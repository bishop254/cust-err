import { TestBed } from '@angular/core/testing';

import { CustErrServService } from './cust-err-serv.service';

describe('CustErrServService', () => {
  let service: CustErrServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustErrServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
