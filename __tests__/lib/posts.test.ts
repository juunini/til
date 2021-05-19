import given from 'given2';

import { list } from 'lib/posts';

describe('posts', () => {
  describe('list', () => {
    given('list', () => list(<number>given.year, <number>given.month));

    context('without any value', () => {
      it('returns years', () => {

      });
    });

    context('with year', () => {
      given('year', () => 2021);

      it('returns given year\'s months', () => {

      });
    });

    context('with month', () => {
      given('year', () => 2021);
      given('month', () => 5);

      it('returns given month\'s days', () => {

      });
    });
  });
});
