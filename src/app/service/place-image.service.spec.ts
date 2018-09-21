import { TestBed, inject } from '@angular/core/testing';

import { PlaceImageService } from './place-image.service';

describe('PlaceImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceImageService]
    });
  });

  it('should be created', inject([PlaceImageService], (service: PlaceImageService) => {
    expect(service).toBeTruthy();
  }));
});
