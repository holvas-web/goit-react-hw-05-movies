import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

export const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
    </Router>
  );
};