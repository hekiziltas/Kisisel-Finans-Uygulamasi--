import { TestBed } from '@angular/core/testing';

import { BistService } from './bist.service';

describe('BistService', () => {
  let service: BistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
