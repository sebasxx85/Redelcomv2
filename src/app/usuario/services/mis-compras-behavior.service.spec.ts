import { TestBed } from '@angular/core/testing';

import { MisComprasBehaviorService } from './mis-compras-behavior.service';

describe('MisComprasBehaviorService', () => {
  let service: MisComprasBehaviorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisComprasBehaviorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
