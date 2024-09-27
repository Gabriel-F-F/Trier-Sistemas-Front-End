import { TestBed } from '@angular/core/testing';

import { HttpRestauranteService } from './http-restaurante.service';

describe('HttpRestauranteService', () => {
  let service: HttpRestauranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRestauranteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
