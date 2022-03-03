import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPermisosPrestacionesSocialesComponent } from './lista-permisos-prestaciones-sociales.component';

describe('ListaPermisosPrestacionesSocialesComponent', () => {
  let component: ListaPermisosPrestacionesSocialesComponent;
  let fixture: ComponentFixture<ListaPermisosPrestacionesSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPermisosPrestacionesSocialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPermisosPrestacionesSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
