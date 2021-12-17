import { TestBed } from '@angular/core/testing';

import { ItdaService } from './itda.service';

describe('ItdaService', () => {
  let service: ItdaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItdaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
