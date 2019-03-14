import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinMaineComponent } from './win-maine.component';

describe('WinMaineComponent', () => {
  let component: WinMaineComponent;
  let fixture: ComponentFixture<WinMaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinMaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinMaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
