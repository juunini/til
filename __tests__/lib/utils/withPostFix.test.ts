import given from 'given2';

import postFix from 'lib/utils/withPostFix';

test('withPostFix should returns given string + given post fix word', () => {
  given('year', () => '2021');
  given('postFix', () => '년');

  expect(postFix(given.year, given.postFix))
    .toBe(`${given.year}${given.postFix}`);
});
