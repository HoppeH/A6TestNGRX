import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggEditComponent } from './logg-edit.component';

describe('LoggEditComponent', () => {
  let component: LoggEditComponent;
  let fixture: ComponentFixture<LoggEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
