import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayBoundToTimeComponent } from './day-bound-to-time.component';

describe('DayBoundToTimeComponent', () => {
  let component: DayBoundToTimeComponent;
  let fixture: ComponentFixture<DayBoundToTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayBoundToTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayBoundToTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
