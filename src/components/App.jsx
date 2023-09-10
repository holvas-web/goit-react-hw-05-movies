import React, { Suspense } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { RoutesItem } from './routes.jsx';

export const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <RoutesItem />
      </Suspense>
    </Router>
  );
};