import createApi from '../../src/api';

describe('Api', () => {
  it('returns true', () => {
    assert.equal(createApi(), true);
  });
});
