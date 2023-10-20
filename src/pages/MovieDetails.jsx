import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../API/API';
import { GoBackBtn } from 'components/Button/Button';
import MovieDetailsComponent from 'components/MovieDetailsComponent/MovieDetComp';
import MovieDetAddInfor from 'components/MovieDetAddInfor/MovieDetAddInfor';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');

  useEffect(() => {
    const findingResult = async () => {
      try {
        const movie = await getMovieDetails(movieId);
        console.log(movie);
        setMovieDetails(movie);
      } catch (error) {
        toast.error('Movie is not found!');
        console.log(error);
      }
    };

    findingResult();
  }, [movieId]);

  

  return (
    <main>
      <GoBackBtn to={backLink.current} />
      <MovieDetailsComponent movieDetails={movieDetails}/>
     <MovieDetAddInfor/>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
