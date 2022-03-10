import { TestBed } from '@angular/core/testing';

import { LocalidadBackendService } from './localidad-backend.service';

describe('LocalidadBackendService', () => {
  let service: LocalidadBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalidadBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
