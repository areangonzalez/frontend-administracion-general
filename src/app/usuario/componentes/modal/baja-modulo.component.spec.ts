import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaModuloComponent } from './baja-modulo.component';

describe('BajaModuloComponent', () => {
  let component: BajaModuloComponent;
  let fixture: ComponentFixture<BajaModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaModuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
