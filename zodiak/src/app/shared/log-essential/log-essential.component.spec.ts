import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogEssentialComponent } from './log-essential.component';

describe('LogEssentialComponent', () => {
  let component: LogEssentialComponent;
  let fixture: ComponentFixture<LogEssentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogEssentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogEssentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
