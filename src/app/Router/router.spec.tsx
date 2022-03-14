import React from 'react';
import { render } from '@testing-library/react';

import { Handler } from 'commons/tests/helpers';
import Router from './Router';

const Home = () => <div>Home</div>;
jest.mock('domains/Home/Home', () => Home);

const makeSut = () => {
  render(<Router />);
};

describe('GIVEN <Routes />', () => {
  describe('WHEN rendered', () => {
    it('THEN renders correctly as publicRoutes', async () => {
      makeSut();
      Handler.element('Home', 'getByText').exists();
    });
  });
});
