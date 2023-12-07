import { TestBed } from '@angular/core/testing';

import { FormRegGuard } from './form-reg.guard';

describe('FormRegGuard', () => {
  let guard: FormRegGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormRegGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
