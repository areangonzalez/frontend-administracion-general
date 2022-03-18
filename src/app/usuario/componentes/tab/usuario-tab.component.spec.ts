import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTabComponent } from './usuario-tab.component';

describe('UsuarioTabComponent', () => {
  let component: UsuarioTabComponent;
  let fixture: ComponentFixture<UsuarioTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
