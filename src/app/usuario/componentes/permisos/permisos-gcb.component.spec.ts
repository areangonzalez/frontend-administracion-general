import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosGcbComponent } from './permisos-gcb.component';

describe('PermisosGcbComponent', () => {
  let component: PermisosGcbComponent;
  let fixture: ComponentFixture<PermisosGcbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisosGcbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisosGcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
