import React from 'react';
import { render } from '@testing-library/react';
import { Handler } from 'commons/tests/helpers';
import Home from './Home';

const makeSut = () => {
  render(<Home />);
};

describe('GIVEN <Home />', () => {
  describe('WHEN rendered', () => {
    it('renders learn react link', () => {
      makeSut();
      Handler.element(/learn react/i, 'getByText').exists();
    });
  });
});
