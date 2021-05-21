import given from 'given2';

import { dir } from 'lib/til';

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
});
