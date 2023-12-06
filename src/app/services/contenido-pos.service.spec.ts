import { TestBed } from '@angular/core/testing';

import { ContenidoPOSService } from './contenido-pos.service';

describe('ContenidoPOSService', () => {
  let service: ContenidoPOSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContenidoPOSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
