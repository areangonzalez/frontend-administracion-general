import { TestBed } from '@angular/core/testing';

import { ListarUnidadMedidaService } from './listar-unidad-medida.service';

describe('ListarUnidadMedidaService', () => {
  let service: ListarUnidadMedidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarUnidadMedidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
