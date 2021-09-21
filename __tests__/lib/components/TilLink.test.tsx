import { render, screen } from '@testing-library/react';
import given from 'given2';

import TilLink from 'lib/components/TilLink';

describe('TilLink', () => {
  const renderTilLink = (gives: any) => render((
    <TilLink
      href={gives.href}
      contents={gives.contents}
      postfix={gives.postfix}
    />
  ));

  given('href', () => '2021');
  given('contents', () => '2021');

  context('with postfix', () => {
    given('postfix', () => '년');

    it('should render contents + postfix', () => {
      renderTilLink(given);

      expect(screen.getByText(given.contents + given.postfix).getAttribute('href'))
        .toBe(`/til/${given.href}`);
    });
  });

  context('without postfix', () => {
    it('should render contents', () => {
      renderTilLink(given);

      expect(screen.getByText(given.contents).getAttribute('href'))
        .toBe(`/til/${given.href}`);
    });
  });
});
