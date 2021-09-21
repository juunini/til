import given from 'given2';

import ls from 'lib/til/ls';

describe('ls', () => {
  context('without any value', () => {
    it('should returns til directory\'s year folder list', () => {
      expect(ls()).toContain('2021'); // 2021년 폴더
    });
  });

  context('with value, 2021 year', () => {
    given('year', () => '2021');

    it('should returns til/2021 in month folder list', () => {
      expect(ls(given.year)).toContain('8'); // 8월 폴더
      expect(ls(given.year)).toContain('9'); // 9월 폴더
    });
  });
});
