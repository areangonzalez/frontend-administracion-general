import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadBusquedaComponent } from './localidad-busqueda.component';

describe('LocalidadBusquedaComponent', () => {
  let component: LocalidadBusquedaComponent;
  let fixture: ComponentFixture<LocalidadBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalidadBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
