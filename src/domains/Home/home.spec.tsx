import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

const makeSut = () => {
  render(<Home />);
};

describe('GIVEN <Home />', () => {
  describe('WHEN rendered', () => {
    it('renders learn react link', () => {
      makeSut();
      expect(screen.getByText(/learn react/i)).toBeInTheDocument();
    });
  });
});
