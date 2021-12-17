import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonalizadoComponent } from './form-personalizado.component';

describe('FormPersonalizadoComponent', () => {
  let component: FormPersonalizadoComponent;
  let fixture: ComponentFixture<FormPersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPersonalizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
