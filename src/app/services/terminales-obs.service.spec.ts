import { TestBed } from '@angular/core/testing';

import { TerminalesObsService } from './terminales-obs.service';

describe('TerminalesObsService', () => {
  let service: TerminalesObsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminalesObsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
