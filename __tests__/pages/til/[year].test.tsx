import { render, screen } from '@testing-library/react';
import given from 'given2';

import Year, { getStaticPaths, getStaticProps } from 'pages/til/[year]';

describe('[year]', () => {
  given('year', () => '2021');
  given('month', () => '5');

  describe('Year', () => {
    it('renders months link', () => {
      render(<Year year={given.year} months={[given.month]} />);

      screen.getByText(`${given.month}월`);
    });
  });

  describe('getStaticPaths', () => {
    it('returns contains years object', async () => {
      const parameters: { paths: Array<any> } = await getStaticPaths(null);
      const years = parameters.paths.map((path) => path.params.year);

      expect(years.includes(given.year)).toBeTruthy();
    });
  });

  describe('getStaticProps', () => {
    given('paths', () => ({ params: { year: given.year } }));

    it('returns months what received year having', async () => {
      const { props } = await getStaticProps(given.paths);

      expect(props.year).toBe(given.year);
      expect(props).toHaveProperty('months');
    });
  });
});
