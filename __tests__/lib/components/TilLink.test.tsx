import { render, screen } from '@testing-library/react';
import given from 'given2';

import TilLink from 'lib/components/TilLink';

describe('TilLink', () => {
  const renderTilLink = ({
    year, month = 0, day = 0, postFix = '',
  }) => render(<TilLink year={year} month={month} day={day} postFix={postFix} />);

  context('with postFix', () => {
    given('year', () => 2021);
    given('postFix', () => '년');

    it('renders name + post fix link', () => {
      renderTilLink({ year: given.year, postFix: given.postFix });

      expect(screen.getByText(`${given.year}${given.postFix}`).getAttribute('href'))
        .toBe(`/til/${given.year}`);
    });
  });

  context('without postFix', () => {
    given('year', () => 2021);

    it('renders name + post fix link', () => {
      renderTilLink({ year: given.year });

      expect(screen.getByText(given.year).getAttribute('href'))
        .toBe(`/til/${given.year}`);
    });
  });

  context('with year and month', () => {
    given('year', () => 2021);
    given('month', () => 9);

    it('renders month', () => {
      renderTilLink({ year: given.year, month: given.month });

      expect(screen.getByText(given.month).getAttribute('href'))
        .toBe(`/til/${given.year}/${given.month}`);
    });
  });

  context('with year, month and day', () => {
    given('year', () => 2021);
    given('month', () => 9);
    given('day', () => 3);

    it('renders day', () => {
      renderTilLink({ year: given.year, month: given.month, day: given.day });

      expect(screen.getByText(given.day).getAttribute('href'))
        .toBe(`/til/${given.year}/${given.month}/${given.day}`);
    });
  });
});
