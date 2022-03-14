import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ROUTES } from 'commons/constants';
import { PublicRoutes, PrivateRoutes } from './widgets';

const Router: React.FC = () => {
  const [isAuthenticated] = useState(false);
  return (
    <BrowserRouter basename={ROUTES.DEFAULT}>
      {!isAuthenticated ? <PublicRoutes /> : <PrivateRoutes />}
    </BrowserRouter>
  );
};

export default Router;
