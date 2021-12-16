import { TestBed } from '@angular/core/testing';

import { ConfiguracionParaPaginarService } from './configuracion-para-paginar.service';

describe('ConfiguracionParaPaginarService', () => {
  let service: ConfiguracionParaPaginarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguracionParaPaginarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
