import React from 'react';
import { render, screen } from '@testing-library/react';

import Home, { getStaticProps } from 'pages/index';
import given from 'given2';

describe('index', () => {
  given('year', () => '2021');

  describe('Home', () => {
    it('renders next index page', () => {
      render(<Home years={[given.year]} />);

      screen.getByText(`${given.year}년`);
    });
  });

  describe('getStaticProps', () => {
    it('returns contains years object', async () => {
      const { props: { years } } = await getStaticProps(null);

      expect(years.includes(given.year)).toBeTruthy();
    });
  });
});
