import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarBorradoPermisoComponent } from './confirmar-borrado-permiso.component';

describe('ConfirmarBorradoPermisoComponent', () => {
  let component: ConfirmarBorradoPermisoComponent;
  let fixture: ComponentFixture<ConfirmarBorradoPermisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarBorradoPermisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarBorradoPermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
