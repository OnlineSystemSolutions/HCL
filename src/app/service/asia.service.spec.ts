import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AsiaService } from './asia.service';

describe('AsiaService', () => {
  let service: AsiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AsiaService ]
    });
    service = TestBed.inject(AsiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
