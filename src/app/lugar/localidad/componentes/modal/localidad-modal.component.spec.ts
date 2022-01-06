import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadModalComponent } from './localidad-modal.component';

describe('LocalidadModalComponent', () => {
  let component: LocalidadModalComponent;
  let fixture: ComponentFixture<LocalidadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalidadModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
