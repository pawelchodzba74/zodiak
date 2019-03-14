import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartEndEventComponent } from './start-end-event.component';

describe('StartEndEventComponent', () => {
  let component: StartEndEventComponent;
  let fixture: ComponentFixture<StartEndEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartEndEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartEndEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
