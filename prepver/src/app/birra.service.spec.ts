import { TestBed } from '@angular/core/testing';

import { BirraService } from './birra.service';

describe('BirraService', () => {
  let service: BirraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



