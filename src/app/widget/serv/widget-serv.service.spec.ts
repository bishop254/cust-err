import { TestBed } from '@angular/core/testing';

import { WidgetServService } from './widget-serv.service';

describe('WidgetServService', () => {
  let service: WidgetServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
