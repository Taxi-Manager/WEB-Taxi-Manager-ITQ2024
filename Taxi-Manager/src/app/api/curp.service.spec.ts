import { TestBed } from '@angular/core/testing';

import { CurpService } from './curp.service';

describe('CurpService', () => {
  let service: CurpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
