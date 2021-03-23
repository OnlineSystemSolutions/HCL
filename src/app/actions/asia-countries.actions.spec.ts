import * as fromAsiaCountries from './asia-countries.actions';

describe('loadAsiaCountriess', () => {
  it('should return an action', () => {
    expect(fromAsiaCountries.loadAsiaCountriess().type).toBe('[AsiaCountries] Load AsiaCountriess');
  });
});
