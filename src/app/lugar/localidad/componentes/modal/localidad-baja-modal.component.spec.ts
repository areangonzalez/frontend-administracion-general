import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadBajaModalComponent } from './localidad-baja-modal.component';

describe('LocalidadBajaModalComponent', () => {
  let component: LocalidadBajaModalComponent;
  let fixture: ComponentFixture<LocalidadBajaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalidadBajaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadBajaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
