import given from 'given2';

import {
  internalURI,
  dir,
  climbingOrder,
  contents,
} from 'lib/til';
import { TilNotFoundError } from 'lib/errors';

describe('til', () => {
  describe('internalURI', () => {
    given('year', () => '2021');
    given('month', () => '5');
    given('day', () => '21');

    it('returns til internalURI path', () => {
      expect(internalURI(given.year, given.month, given.day)).toBe(`/til/${given.year}/${given.month}/${given.day}`);
    });
  });

  describe('dir', () => {
    given('dir', () => dir(
      given.year && given.year.toString(),
      given.month && given.month.toString(),
    ));

    context('without any value', () => {
      it('returns years', () => {
        expect(given.dir).toContain('2021');
      });
    });

    context('with year', () => {
      given('year', () => 2021);

      it('returns given year\'s months', () => {
        expect(given.dir).toContain('5');
      });

      context('with month', () => {
        given('month', () => 5);

        it('returns given month\'s days', () => {
          expect(given.dir).toContain('21.md');
        });
      });
    });
  });

  describe('climbingOrder', () => {
    it('should sort by integer value', () => {
      const sortedArray = climbingOrder(['2020.md', '2019.md', '2009.md', '2010.md', '2001.md', '1999.md']);

      expect(sortedArray).toEqual(['1999.md', '2001.md', '2009.md', '2010.md', '2019.md', '2020.md']);
    });
  });

  describe('contents', () => {
    given('year', () => 2021);
    given('month', () => 5);
    given('contents', () => contents(
      given.year.toString(),
      given.month.toString(),
      given.day,
    ));

    context('without file exists', () => {
      given('day', () => '20.md');

      it('throws tilNotFound error', () => {
        expect(() => given.contents).toThrowError(TilNotFoundError);
      });
    });

    context('with file exists', () => {
      given('day', () => '21.md');

      it('returns contents', () => {
        expect(given.contents).not.toBeNull();
      });
    });
  });
});
