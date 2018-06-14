import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggInputComponent } from './logg-input.component';

describe('LoggInputComponent', () => {
  let component: LoggInputComponent;
  let fixture: ComponentFixture<LoggInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
