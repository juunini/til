import given from 'given2';

import cat from 'lib/til/cat';

describe('cat', () => {
  given('year', () => '2021');
  given('month', () => '5');

  context('when file is not exists', () => {
    given('day', () => '20');

    it('throws tilNotFound error', () => {
      expect(() => cat(given.year, given.month, given.day)).toThrowError();
    });
  });

  context('when file is exists', () => {
    given('day', () => '21');

    it('returns contents', () => {
      expect(cat(given.year, given.month, given.day)).not.toBeNull();
    });
  });
});
