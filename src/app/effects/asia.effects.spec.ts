import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { AsiaService } from '../service/asia.service';
import { AsiaServiceStub } from '../service/asia.service.stub';

import { AsiaEffects } from './asia.effects';

describe('AsiaEffects', () => {
  const actions$: Observable<any> = undefined;
  let effects: AsiaEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AsiaService,
          useValue: AsiaServiceStub
        },
        AsiaEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AsiaEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
