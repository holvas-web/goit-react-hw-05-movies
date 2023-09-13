// import React, { Suspense } from 'react';
import React from 'react';
import { Route, Outlet, Routes, Link } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { NavWrap, RoutesWrap } from '../App/AppStyled.styled'

export const App = () => {
  return (
    <div> 
      <NavWrap>
        <Link to="/" end>Home</Link>
        <Link to="/movies">Movies</Link>
      </NavWrap>

      <RoutesWrap>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/movies/:id/cast" element={<Cast />} />
          <Route path="/movies/:id/reviews" element={<Reviews />} />
          <Route path="/*" element={<Outlet />} />
        </Routes>
      </RoutesWrap>

    </div>


    // <Router>
    //   <Suspense fallback={<div>Loading...</div>}>
    //     <RoutesItem />
    //   </Suspense>
    // </Router>
  );
};