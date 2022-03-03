import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosPrestacionesSocialesComponent } from './permisos-prestaciones-sociales.component';

describe('PermisosPrestacionesSocialesComponent', () => {
  let component: PermisosPrestacionesSocialesComponent;
  let fixture: ComponentFixture<PermisosPrestacionesSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisosPrestacionesSocialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisosPrestacionesSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
