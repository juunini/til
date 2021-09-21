import React from 'react';
import { render, screen } from '@testing-library/react';

import Home, { getStaticProps } from 'pages/index';
import given from 'given2';

describe('index', () => {
  describe('Home', () => {
    given('years', () => ['2021', '2022']);

    it('renders year list', () => {
      render(<Home years={given.years} />);

      given.years.forEach((year: string) => screen.getByText(new RegExp(year)));
    });
  });

  describe('getStaticProps', () => {
    it('returns contains years object', async () => {
      const { props: { years } } = await getStaticProps(null) as {
        props: { years: Array<string> };
      };

      expect(years).toContain('2021');
    });
  });
});
