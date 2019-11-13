import { TestBed } from '@angular/core/testing';

import { DataSourceTableService } from './data-source-table.service';

describe('DataSourceTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSourceTableService = TestBed.get(DataSourceTableService);
    expect(service).toBeTruthy();
  });
});
