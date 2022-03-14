import React from 'react';
import { render } from '@testing-library/react';

import { Handler } from 'commons/tests/helpers';
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
      Handler.element('router', 'getByText').exists();
    });
  });
});
