import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditarModalComponent } from './crear-editar-modal.component';

describe('CrearEditarModalComponent', () => {
  let component: CrearEditarModalComponent;
  let fixture: ComponentFixture<CrearEditarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEditarModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEditarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
