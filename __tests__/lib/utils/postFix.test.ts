import given from 'given2';

import postFix from 'lib/utils/postFix';

test('postFix should returns given string + given post fix word', () => {
  given('year', () => '2021');
  given('lastWord', () => '년');

  expect(postFix(given.year, given.lastWord))
    .toBe(`${given.year}${given.lastWord}`);
});
