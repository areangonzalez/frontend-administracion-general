import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPersonalizadaComponent } from './tabla-personalizada.component';

describe('TablaPersonalizadaComponent', () => {
  let component: TablaPersonalizadaComponent;
  let fixture: ComponentFixture<TablaPersonalizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPersonalizadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
