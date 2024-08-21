import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { canDeactivateGuard } from './can-deactivate.guard';
import { RegisterComponent } from '../register/register.component';

describe('canDeactivateGuard', () => {
  const executeGuard: CanDeactivateFn<RegisterComponent> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canDeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
