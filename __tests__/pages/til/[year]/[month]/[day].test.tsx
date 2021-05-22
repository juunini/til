import { render, screen } from '@testing-library/react';
import given from 'given2';

import Day, { getStaticPaths, getStaticProps } from 'pages/til/[year]/[month]/[day]';

describe('[day]', () => {
  given('year', () => '2021');
  given('month', () => '5');
  given('day', () => '21');
  given('content', () => 'given content');

  describe('Day', () => {
    it('renders content', () => {
      render(<Day year={given.year} month={given.month} day={given.day} content={given.content} />);

      screen.getByText(new RegExp(given.content, 'i'));
    });
  });

  describe('getStaticPaths', () => {
    it('returns contains years and months and days object', async () => {
      const { paths }: { paths: Array<any> } = await getStaticPaths(null);

      expect(paths[0].params).toHaveProperty('year');
      expect(paths[0].params).toHaveProperty('month');
      expect(paths[0].params).toHaveProperty('day');
    });
  });

  describe('getStaticProps', () => {
    given('paths', () => ({ params: { year: given.year, month: given.month, day: given.day } }));

    it('returns daily content', async () => {
      const { props } = await getStaticProps(given.paths);

      expect(props.year).toBe(given.year);
      expect(props.month).toBe(given.month);
      expect(props.day).toBe(given.day);
      expect(props).toHaveProperty('content');
    });
  });
});
