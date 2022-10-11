import { TestBed } from '@angular/core/testing';

import { OnesourceIconsService } from './onesource-icons.service';

describe('OnesourceIconsService', () => {
  let service: OnesourceIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnesourceIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
