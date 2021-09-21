import { render, screen } from '@testing-library/react';
import given from 'given2';

import Month, { getStaticPaths, getStaticProps } from 'pages/til/[year]/[month]';

describe('[month]', () => {
  given('year', () => '2021');
  given('month', () => '5');
  given('days', () => ['21']);

  describe('Month', () => {
    it('renders days link', () => {
      render(<Month year={given.year} month={given.month} days={given.days} />);

      screen.getByText(`${given.days[0]}일`);
    });
  });

  describe('getStaticPaths', () => {
    it('returns contains years and months object', async () => {
      const { paths }: { paths: Array<any> } = await getStaticPaths(null);

      expect(paths[0].params).toHaveProperty('year');
      expect(paths[0].params).toHaveProperty('month');
    });
  });

  describe('getStaticProps', () => {
    given('paths', () => ({ params: { year: given.year, month: given.month } }));

    it('returns days what received year and month having', async () => {
      const { props } = await getStaticProps(given.paths) as any;

      expect(props.year).toBe(given.year);
      expect(props.month).toBe(given.month);
      expect(props).toHaveProperty('days');
    });
  });
});
