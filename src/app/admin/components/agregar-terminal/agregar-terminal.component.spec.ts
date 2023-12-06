import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTerminalComponent } from './agregar-terminal.component';

describe('AgregarTerminalComponent', () => {
  let component: AgregarTerminalComponent;
  let fixture: ComponentFixture<AgregarTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTerminalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
