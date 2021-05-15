import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from 'pages/index';

describe('index page', () => {
  it('renders next index page', () => {
    render(<Home />);

    screen.getByText(/Welcome/);
  });
});
