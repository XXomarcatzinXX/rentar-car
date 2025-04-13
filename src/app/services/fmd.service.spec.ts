import { TestBed } from '@angular/core/testing';

import { FMDService } from './fmd.service';

describe('FMDService', () => {
  let service: FMDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FMDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
