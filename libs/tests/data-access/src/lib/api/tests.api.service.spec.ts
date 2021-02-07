import { TestBed } from '@angular/core/testing';

import { TestsApiService } from './tests.api.service';

describe('TestsService', () => {
  let service: TestsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
