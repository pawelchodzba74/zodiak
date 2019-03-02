import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSheduleComponent } from './admin-shedule.component';

describe('AdminSheduleComponent', () => {
  let component: AdminSheduleComponent;
  let fixture: ComponentFixture<AdminSheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
