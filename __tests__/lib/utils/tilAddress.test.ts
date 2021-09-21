import given from 'given2';

import tilAddress from 'lib/utils/tilAddress';

describe('tilAddress', () => {
  given('tilRoot', () => 'til');
  given('year', () => '2021');
  given('month', () => '9');
  given('day', () => '21');

  context('when gives only year', () => {
    it('returns til root + year address', () => {
      expect(tilAddress(given.year))
        .toBe(`/${given.tilRoot}/${given.year}`);
    });
  });

  context('when gives year and month', () => {
    it('returns til root + year + month address', () => {
      expect(tilAddress(given.year, given.month))
        .toBe(`/${given.tilRoot}/${given.year}/${given.month}`);
    });
  });

  context('when gives year, month and day', () => {
    it('returns til root + year + month + day address', () => {
      expect(tilAddress(given.year, given.month, given.day))
        .toBe(`/${given.tilRoot}/${given.year}/${given.month}/${given.day}`);
    });
  });
});
