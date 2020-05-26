import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorpassComponentComponent } from './visitorpass-component.component';

describe('VisitorpassComponentComponent', () => {
  let component: VisitorpassComponentComponent;
  let fixture: ComponentFixture<VisitorpassComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorpassComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorpassComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
