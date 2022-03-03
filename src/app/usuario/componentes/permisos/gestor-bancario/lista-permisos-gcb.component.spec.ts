import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPermisosGcbComponent } from './lista-permisos-gcb.component';

describe('ListaPermisosGcbComponent', () => {
  let component: ListaPermisosGcbComponent;
  let fixture: ComponentFixture<ListaPermisosGcbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPermisosGcbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPermisosGcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
