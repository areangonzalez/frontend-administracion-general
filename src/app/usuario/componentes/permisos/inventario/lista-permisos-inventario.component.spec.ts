import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPermisosInventarioComponent } from './lista-permisos-inventario.component';

describe('ListaPermisosInventarioComponent', () => {
  let component: ListaPermisosInventarioComponent;
  let fixture: ComponentFixture<ListaPermisosInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPermisosInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPermisosInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
