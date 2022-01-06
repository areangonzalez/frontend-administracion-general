import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadExtraBusquedaComponent } from './localidad-extra-busqueda.component';

describe('LocalidadExtraBusquedaComponent', () => {
  let component: LocalidadExtraBusquedaComponent;
  let fixture: ComponentFixture<LocalidadExtraBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalidadExtraBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadExtraBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
