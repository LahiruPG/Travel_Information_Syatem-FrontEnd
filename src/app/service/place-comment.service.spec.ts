import { TestBed, inject } from '@angular/core/testing';

import { PlaceReviewService } from './place-comment.service';

describe('PlaceCommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceReviewService]
    });
  });

  it('should be created', inject([PlaceReviewService], (service: PlaceReviewService) => {
    expect(service).toBeTruthy();
  }));
});
