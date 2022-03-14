import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ROUTES } from 'commons/constants';
import { Home } from 'domains';

const PublicRoutes: React.FC = () => (
  <Routes>
    <Route path={ROUTES.NOT_FOUND} element={<div>NotFound</div>} />
    <Route path={ROUTES.DEFAULT} element={<Home />} />
    <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} />} />
  </Routes>
);

export default PublicRoutes;
