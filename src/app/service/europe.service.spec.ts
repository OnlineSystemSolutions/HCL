import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { EuropeService } from './europe.service';

describe('EuropeService', () => {
  let service: EuropeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ EuropeService ]
    });
    service = TestBed.inject(EuropeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
