import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadExtraBorrarModalComponent } from './localidad-extra-borrar-modal.component';

describe('LocalidadExtraBorrarModalComponent', () => {
  let component: LocalidadExtraBorrarModalComponent;
  let fixture: ComponentFixture<LocalidadExtraBorrarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalidadExtraBorrarModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadExtraBorrarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
