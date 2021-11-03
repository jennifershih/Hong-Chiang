import { TestBed } from '@angular/core/testing';

import { DataSource1StoreService } from './data-source1-store.service';

describe('DataSource1StoreService', () => {
  let service: DataSource1StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSource1StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
