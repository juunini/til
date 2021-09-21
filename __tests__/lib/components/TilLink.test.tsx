import { render, screen } from '@testing-library/react';
import given from 'given2';

import TilLink from 'lib/components/TilLink';

describe('TilLink', () => {
  function renderTilLink(paths: Array<string>, name: string, postFix: string = '') {
    return render(<TilLink paths={paths} name={name} postFix={postFix} />);
  }

  context('with postFix', () => {
    given('year', () => '2021');
    given('postFix', () => '년');

    it('renders name + post fix link', () => {
      renderTilLink([given.year], given.year, given.postFix);

      screen.getByText(`${given.year}${given.postFix}`);
    });
  });

  context('without postFix', () => {
    given('year', () => '2021');

    it('renders name + post fix link', () => {
      renderTilLink([given.year], given.year);

      screen.getByText(`${given.year}`);
    });
  });
});
