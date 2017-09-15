import { TestBed, inject } from '@angular/core/testing';

import { ViewBookService } from './view-book.service';

describe('ViewBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewBookService]
    });
  });

  it('should be created', inject([ViewBookService], (service: ViewBookService) => {
    expect(service).toBeTruthy();
  }));
});
