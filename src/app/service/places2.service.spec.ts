import { TestBed, inject } from '@angular/core/testing';

import { Places2Service } from './places2.service';

describe('Places2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Places2Service]
    });
  });

  it('should be created', inject([Places2Service], (service: Places2Service) => {
    expect(service).toBeTruthy();
  }));
});
