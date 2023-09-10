// import React, { Suspense } from 'react';
import React from 'react';
import { Route, Outlet, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/movies/:id/cast" element={<Cast />} />
      <Route path="/movies/:id/reviews" element={<Reviews />} />
      <Route path="/*" element={<Outlet />} />
    </Routes>

    // <Router>
    //   <Suspense fallback={<div>Loading...</div>}>
    //     <RoutesItem />
    //   </Suspense>
    // </Router>
  );
};