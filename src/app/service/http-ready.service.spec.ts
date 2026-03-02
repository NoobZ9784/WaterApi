import { TestBed } from '@angular/core/testing';

import { HttpReadyService } from './http-ready.service';

describe('HttpReadyService', () => {
  let service: HttpReadyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpReadyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
