import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosInventarioComponent } from './permisos-inventario.component';

describe('PermisosInventarioComponent', () => {
  let component: PermisosInventarioComponent;
  let fixture: ComponentFixture<PermisosInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisosInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisosInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
