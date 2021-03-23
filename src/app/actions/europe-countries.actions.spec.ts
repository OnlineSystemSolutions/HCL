import * as fromEuropeCountries from './europe-countries.actions';

describe('loadEuropeCountriess', () => {
  it('should return an action', () => {
    expect(fromEuropeCountries.loadEuropeCountriess().type).toBe('[EuropeCountries] Load EuropeCountriess');
  });
});
