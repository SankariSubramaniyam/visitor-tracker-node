import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGatekeeperComponent } from './dashboard-gatekeeper.component';

describe('DashboardGatekeeperComponent', () => {
  let component: DashboardGatekeeperComponent;
  let fixture: ComponentFixture<DashboardGatekeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGatekeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGatekeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
