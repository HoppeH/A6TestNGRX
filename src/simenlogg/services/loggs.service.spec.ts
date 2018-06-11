import { TestBed, inject } from '@angular/core/testing';

import { LoggsService } from './loggs.service';

describe('TodosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggsService]
    });
  });

  it('should be created', inject([LoggsService], (service: LoggsService) => {
    expect(service).toBeTruthy();
  }));
});
