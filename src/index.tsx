import React from 'react';
import ReactDOM from 'react-dom';

import { IS_PRODUCTION } from 'commons/constants';
import App from './app';
import reportWebVitals from './reportWebVitals';
import 'commons/styles/base.css';

if (!IS_PRODUCTION) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('commons/tests/mocks/server/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
