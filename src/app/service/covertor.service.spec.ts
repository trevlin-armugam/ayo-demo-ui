import { TestBed, inject } from '@angular/core/testing';

import { CovertorService } from './covertor.service';

describe('CovertorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CovertorService]
    });
  });

  it('should be created', inject([CovertorService], (service: CovertorService) => {
    expect(service).toBeTruthy();
  }));
});
