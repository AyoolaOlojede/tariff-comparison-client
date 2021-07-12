import { TestBed } from '@angular/core/testing';

import { TarrifService } from './tarrif.service';

describe('TarrifService', () => {
  let service: TarrifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarrifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
