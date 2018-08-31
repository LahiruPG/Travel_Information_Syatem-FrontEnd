import { TestBed, inject } from '@angular/core/testing';

import { PlaceCategoryService } from './place-category.service';

describe('PlaceCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceCategoryService]
    });
  });

  it('should be created', inject([PlaceCategoryService], (service: PlaceCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
