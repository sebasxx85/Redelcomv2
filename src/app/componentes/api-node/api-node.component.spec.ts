import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiNodeComponent } from './api-node.component';

describe('ApiNodeComponent', () => {
  let component: ApiNodeComponent;
  let fixture: ComponentFixture<ApiNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiNodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
