import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaModalComponent } from './baja-modal.component';

describe('BajaModalComponent', () => {
  let component: BajaModalComponent;
  let fixture: ComponentFixture<BajaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
