import { TestBed } from '@angular/core/testing';

import { RefreshTableService } from './refresh-table.service';

describe('RefreshTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RefreshTableService = TestBed.get(RefreshTableService);
    expect(service).toBeTruthy();
  });
});
