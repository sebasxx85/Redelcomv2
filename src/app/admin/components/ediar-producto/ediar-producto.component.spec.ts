import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiarProductoComponent } from './ediar-producto.component';

describe('EdiarProductoComponent', () => {
  let component: EdiarProductoComponent;
  let fixture: ComponentFixture<EdiarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdiarProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdiarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
