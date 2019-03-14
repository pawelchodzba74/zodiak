import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnScheduleComponent } from './btn-schedule.component';

describe('BtnScheduleComponent', () => {
  let component: BtnScheduleComponent;
  let fixture: ComponentFixture<BtnScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
