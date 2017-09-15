import { TestBed, inject } from '@angular/core/testing';

import { IsuuebooksService } from './isuuebooks.service';

describe('IsuuebooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsuuebooksService]
    });
  });

  it('should be created', inject([IsuuebooksService], (service: IsuuebooksService) => {
    expect(service).toBeTruthy();
  }));
});
