import given from 'given2';

import {
  dir,
  contents,
} from 'lib/til';
import { TilNotFoundError } from 'lib/errors';

describe('til', () => {
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
