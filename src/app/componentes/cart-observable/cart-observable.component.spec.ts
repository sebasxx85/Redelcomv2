import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartObservableComponent } from './cart-observable.component';

describe('CartObservableComponent', () => {
  let component: CartObservableComponent;
  let fixture: ComponentFixture<CartObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
