import { TestBed } from '@angular/core/testing';

import { ConfigTablaService } from './config-tabla.service';

describe('ConfigTablaService', () => {
  let service: ConfigTablaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigTablaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
