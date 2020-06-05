import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteeHierarchyComponent } from './visitee-hierarchy.component';

describe('VisiteeHierarchyComponent', () => {
  let component: VisiteeHierarchyComponent;
  let fixture: ComponentFixture<VisiteeHierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisiteeHierarchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteeHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
