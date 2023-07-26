import { TestBed } from '@angular/core/testing';

import { PackageTrakerService } from './package-traker.service';

describe('PackageTrakerService', () => {
  let service: PackageTrakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageTrakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
