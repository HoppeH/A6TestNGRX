import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggInputEditComponent } from './logg-input-edit.component';

describe('LoggInputEditComponent', () => {
  let component: LoggInputEditComponent;
  let fixture: ComponentFixture<LoggInputEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoggInputEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggInputEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
