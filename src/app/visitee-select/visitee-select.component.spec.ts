import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteeSelectComponent } from './visitee-select.component';

describe('VisiteeSelectComponent', () => {
  let component: VisiteeSelectComponent;
  let fixture: ComponentFixture<VisiteeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisiteeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
