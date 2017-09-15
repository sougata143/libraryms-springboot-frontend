import { TestBed, inject } from '@angular/core/testing';

import { BokkserviceService } from './bokkservice.service';

describe('BokkserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BokkserviceService]
    });
  });

  it('should be created', inject([BokkserviceService], (service: BokkserviceService) => {
    expect(service).toBeTruthy();
  }));
});
