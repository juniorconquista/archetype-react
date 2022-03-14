import React, { Suspense } from 'react';
import Router from './Router';

const App: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Router />
  </Suspense>
);

export default App;
