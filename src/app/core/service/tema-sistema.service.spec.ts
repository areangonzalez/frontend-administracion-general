import { TestBed } from '@angular/core/testing';

import { TemaSistemaService } from './tema-sistema.service';

describe('TemaSistemaService', () => {
  let service: TemaSistemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemaSistemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
