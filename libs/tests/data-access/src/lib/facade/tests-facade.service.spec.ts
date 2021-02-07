import { TestBed } from '@angular/core/testing';

import { TestsFacadeService } from './tests-facade.service';

describe('TestsFacadeService', () => {
  let service: TestsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
