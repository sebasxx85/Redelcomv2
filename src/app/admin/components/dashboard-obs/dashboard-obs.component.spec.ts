import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardObsComponent } from './dashboard-obs.component';

describe('DashboardObsComponent', () => {
  let component: DashboardObsComponent;
  let fixture: ComponentFixture<DashboardObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardObsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
