import { TestBed } from '@angular/core/testing';

import { ListarMarcaService } from './listar-marca.service';

describe('ListarMarcaService', () => {
  let service: ListarMarcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarMarcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
