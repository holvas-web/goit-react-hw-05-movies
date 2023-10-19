import {lazy, Suspense} from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../../views/Home'))
const MoviesPage = lazy(() => import('../../views/Movies'))
const MovieDetailsPage = lazy(() => import('../../views/MovieDetails/MovieDetails'))
const NotFoundView = lazy(() => import('../../views/NotFoundView.js'))


export default function App() {
  return (
    <Container>
      <Header />
      <Suspense fallback = {<Loader />}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/*" element={<Outlet />} />
          <Route><NotFoundView /></Route>
        </Routes>
      </Suspense>
    </Container>
  )
};


// // import React, { Suspense } from 'react';
// import { lazy, Suspense } from 'react';
// import { Route, Outlet, Routes, Link, useLocation } from 'react-router-dom';
// import { NavWrap, RoutesWrap, LinkMovies } from '../App/AppStyled.styled';

// const Home = lazy(() => import ('../pages/Home/Home'));
// const Movies = lazy(() => import ('../pages/Movies/Movies'));
// const MovieDetails = lazy(() => import ('../MovieDetails/MovieDetails'));
// const Cast = lazy(() => import ('../Cast/Cast'));
// const Reviews = lazy(() => import ('../Reviews/Reviews'));

// export const App = () => {
//   const location = useLocation(); 
  
//   return (
//     <div> 
//       <NavWrap>
//         <Link to="/" end='true'state={{ from: location }}>Home</Link>
//         <LinkMovies>
//           <Link to="/movies" end='true' state={{ from: location }}>Movies</Link>
//         </LinkMovies>
//       </NavWrap> 

//       <hr />

//       <Suspense fallback={<div>Loading...</div>}>
//         <RoutesWrap>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/movies" element={<Movies />} />
//             <Route path="/movies/:id" element={<MovieDetails />} />
//             <Route path="/movies/:id/cast" element={<Cast />} />
//             <Route path="/movies/:id/reviews" element={<Reviews />} />
//             <Route path="/*" element={<Outlet />} />
//           </Routes>
//         </RoutesWrap>
//       </Suspense>
//     </div>
//   );
// };