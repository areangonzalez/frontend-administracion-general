import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormProductoComponent } from './modal-form-producto.component';

describe('ModalFormProductoComponent', () => {
  let component: ModalFormProductoComponent;
  let fixture: ComponentFixture<ModalFormProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFormProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
