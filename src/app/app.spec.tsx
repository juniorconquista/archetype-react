import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

const Router = () => <div>router</div>;
jest.mock('app/Router/Router', () => Router);

const makeSut = () => {
  render(<App />);
};

describe('GIVEN <App />', () => {
  describe('WHEN rendered', () => {
    it('THEN renders correctly', () => {
      makeSut();
      expect(screen.getByText('router')).toBeInTheDocument();
    });
  });
});
