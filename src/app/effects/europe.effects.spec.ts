import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { EuropeService } from '../service/europe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EuropeEffects } from './europe.effects';
import { EuropeServiceStub } from '../service/europe.service.stub';

describe('EuropeEffects', () => {
  const actions$: Observable<any> = undefined;
  let effects: EuropeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        EuropeEffects,
        {
          provide: EuropeService,
          useValue: EuropeServiceStub
        },
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(EuropeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
