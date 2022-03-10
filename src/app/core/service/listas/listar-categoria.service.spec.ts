import { TestBed } from '@angular/core/testing';

import { ListarCategoriaService } from './listar-categoria.service';

describe('ListarCategoriaService', () => {
  let service: ListarCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
