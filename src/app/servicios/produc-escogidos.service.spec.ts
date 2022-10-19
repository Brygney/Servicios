import { TestBed } from '@angular/core/testing';

import { ProducEscogidosService } from './produc-escogidos.service';

describe('ProducEscogidosService', () => {
  let service: ProducEscogidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducEscogidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
