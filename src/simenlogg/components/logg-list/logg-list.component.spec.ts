import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggListComponent } from './logg-list.component';

describe('LoggListComponent', () => {
  let component: LoggListComponent;
  let fixture: ComponentFixture<LoggListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
