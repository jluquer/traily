import { TestBed } from '@angular/core/testing';

import { TrailService } from './trail.service';

describe('TrailService', () => {
  let service: TrailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
