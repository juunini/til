import { render, screen } from '@testing-library/react';
import given from 'given2';

import TilLinks from 'lib/components/TilLinks';

describe('TilLinks', () => {
  function renderTilLinks(props) {
    return render(<TilLinks props={props} />);
  }

  given('props', () => [
    { href: '2021', contents: '2021', postfix: '년' },
    { href: '2020', contents: '2020' },
    { href: '2021/9', contents: '9', postfix: '월' },
  ]);

  it('should render many TilLink components', () => {
    renderTilLinks(given.props);

    given.props.forEach(({ href, contents, postfix }) => {
      expect(screen.getByText(`${contents}${postfix ?? ''}`).getAttribute('href'))
        .toBe(`/til/${href}`);
    });
  });
});
