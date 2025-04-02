import { TestBed } from '@angular/core/testing';

import { LbbSideMenuService } from './lbb-side-menu.service';

describe('LbbSideMenuService', () => {
  let service: LbbSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LbbSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
