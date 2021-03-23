import { exposedReducer, initialState } from './reducer.reducer';

describe('Reducer Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = exposedReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
