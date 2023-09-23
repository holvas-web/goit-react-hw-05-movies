// import React, { Suspense } from 'react';
import { lazy, Suspense } from 'react';
import { Route, Outlet, Routes, Link } from 'react-router-dom';
import { NavWrap, RoutesWrap } from '../App/AppStyled.styled';

const Home = lazy(() => import ('../pages/Home/Home'));
const Movies = lazy(() => import ('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import ('../MovieDetails/MovieDetails'));
const Cast = lazy(() => import ('../Cast/Cast'));
const Reviews = lazy(() => import ('../Reviews/Reviews'));

export const App = () => {
  return (
    <div> 
      <NavWrap>
        <Link to="/" end='true'>Home</Link>
        <Link to="/movies" end='true'>Movies</Link>
      </NavWrap> 

      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
};