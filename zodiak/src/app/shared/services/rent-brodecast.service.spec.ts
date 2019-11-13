import { TestBed } from '@angular/core/testing';

import { RentBrodecastService } from './rent-brodecast.service';

describe('RentBrodecastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentBrodecastService = TestBed.get(RentBrodecastService);
    expect(service).toBeTruthy();
  });
});
