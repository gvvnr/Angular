import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLifeCycleComponent } from './angular-life-cycle.component';

describe('AngularLifeCycleComponent', () => {
  let component: AngularLifeCycleComponent;
  let fixture: ComponentFixture<AngularLifeCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLifeCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
