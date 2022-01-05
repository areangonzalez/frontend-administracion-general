import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaPoductoComponent } from './baja-poducto.component';

describe('BajaPoductoComponent', () => {
  let component: BajaPoductoComponent;
  let fixture: ComponentFixture<BajaPoductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaPoductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaPoductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
