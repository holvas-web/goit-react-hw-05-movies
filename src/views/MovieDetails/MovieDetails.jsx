import { useState, useEffect, lazy, Suspense } from 'react';
import { NavLink, Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader.jsx'
import { fetchMoviesId, IMAGE_URL } from '../../services/api';
import styles from '../../components/Navigation/Navigation.module.css';
// import '../style.css';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export default function MovieDetails() {
    const history = useNavigate();
    const location = useLocation();

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    
    let locationValue = location.state;
    if (location.state) {
        locationValue = location.state.from;
    }
    
    useEffect(() => {
        fetchMoviesId(movieId).then(movie => {
            setMovie(movie);
        });
    }, [movieId]);

    const onGoBack = () => {
        if (!location.state) {
            history.push('/');
            return;
        }
        history.push(`${location.state.from.pathname}${location.state.from.search}`)

        }


    return (
        <>
            {movie && (
                <>
                    <button type="button" className="Button" onClick={onGoBack}>Go Back</button>

                    <div className="DetailsPage">
                        <img src={IMAGE_URL + movie.poster_path} alt={movie.title} className="DetailsPage_img" />
                        <div>
                            <h2>{movie.title}</h2>
                            <p><span>Rating: </span>{movie.vote_average}</p>
                            <p><span>Overview: </span>{movie.overview}</p>
                            <p><span>Genres: </span>{movie.genres.map(genre => genre.name).join(' ')}</p>
                        </div>
                    </div>

                    <hr />

                    <h3>Additional information</h3>
            
                    <nav>
                        <NavLink
                            to={{
                                pathname: `/movies/${movieId}/cast`,
                                state: { from: locationValue }
                            }}
                            className={styles.link}
                            activeClassName={styles.activeLink}
                        >
                            Cast
                        </NavLink>

                        <NavLink
                            to={{
                                pathname: `/movies/${movieId}/reviews`,
                                state: { from: locationValue }
                            }}
                            className={styles.link}
                            activeClassName={styles.activeLink}
                        >
                            Reviews
                        </NavLink>
                    </nav>

                    <hr />
                    
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route path={`/movies/${movieId}/cast`}>
                                <Cast movieId={movieId} />
                            </Route>

                            <Route path={`/movies/${movieId}/reviews`}>
                                <Reviews movieId={movieId} />
                            </Route>
                        </Routes>
                    </Suspense>
                </>
            )}
        </>
    )
};




// import React, { useState, useEffect } from 'react';
// import { Link, useParams, useLocation } from 'react-router-dom';
// import { fetchMovieDetails } from 'services/api';
// import { Wrapper, TextWrap, Img, TextInfo } from '../MovieDetails/MovieDetails.styled';

// function MovieDetails() {
//   const { id } = useParams();
//   const [movieDetails, setMovieDetails] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const location = useLocation();
//   const goBack = location.state?.from ?? '/';
//   const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const details = await fetchMovieDetails(id);
//         setMovieDetails(details);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching movie details:', error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <Link to={goBack}>Go back</Link>
//           <Wrapper>
//             <Img src={IMAGE_URL + movieDetails.poster_path} alt={movieDetails.title} />
//             <TextWrap>
//               <h1>{movieDetails.original_title}</h1>
//               <p>User Score: {movieDetails.vote_average}%</p>
//               <h2>Overview</h2>
//               <p>{movieDetails.overview}</p>
//               <h2>Genres</h2>
//               <p>{movieDetails.genres.map(genre => genre.name).join(' ')}</p>
//             </TextWrap> 
//           </Wrapper>
//             <hr />

          
//           <TextInfo> 
//             <h3>Additional information</h3>
//             <Link to={`/movies/${id}/cast`}>Cast</Link>
//             <Link to={`/movies/${id}/reviews`}>Reviews</Link>
//           </TextInfo>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MovieDetails

// // import React, { useState, useEffect } from 'react';
// // import { useParams, useLocation, Link } from 'react-router-dom';
// // import { fetchMovieDetails, fetchMovieCast, fetchMovieReviews } from 'services/api';
// // import { Wrapper, TextWrap, Img, TextInfo } from '../MovieDetails/MovieDetails.styled';
// // import { CastList, CastItem,CastImg  } from '../Cast/CastStyled.styled'

// // function MovieDetails() {
// //   const { id } = useParams();
// //   const [movieDetails, setMovieDetails] = useState({});
// //   const [cast, setCast] = useState([]);
// //   const [reviews, setReviews] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const location = useLocation();
// //   const goBack = location.state?.from ?? '/';
// //   const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

// //   let locationValue = location.state;
// //     if (location.state) {
// //         locationValue = location.state.from;
// //     }

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const details = await fetchMovieDetails(id);
// //         setIsLoading(false);

// //         const castData = await fetchMovieCast(id); // Використовуємо fetchMovieCast
// //         const reviewData = await fetchMovieReviews(id); // Використовуємо fetchMovieReviews
        
// //         setMovieDetails(details);
// //         setCast(castData); // Зберігаємо інформацію про акторів (Cast)
// //         setReviews(reviewData); // Зберігаємо відгуки (Reviews)
// //       } catch (error) {
// //         console.error('Error fetching movie details:', error);
// //       }
// //     };

// //     fetchData();
// //   }, [id]);

// //   return (
// //     <div>
// //       {isLoading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <div>
// //           <Link to={goBack}>Go back</Link>
// //           <Wrapper>
// //             <Img src={IMAGE_URL + movieDetails.poster_path} alt={movieDetails.title} />
// //             <TextWrap>
// //               <h1>{movieDetails.original_title}</h1>
// //               <p>User Score: {movieDetails.vote_average}%</p>
// //               <h2>Overview</h2>
// //               <p>{movieDetails.overview}</p>
// //               <h2>Genres</h2>
// //               <p>{movieDetails.genres.map(genre => genre.name).join(' ')}</p>
// //             </TextWrap>
// //           </Wrapper>
// //           <hr />
// //           <TextInfo> 
// //             <h3>Additional information</h3>

// //             <Link
// //               to={{
// //                   pathname: `/movies/${id}/cast`,
// //                   state: { from: locationValue }
// //               }}
// //             >Cast</Link>
// //             <Link
// //                 to={{
// //                     pathname: `/movies/${id}/reviews`,
// //                     state: { from: locationValue }
// //                 }}
// //             >Reviews</Link>
// //           </TextInfo>

// //           {/* Умовний рендер на основі стану */}
// //           {cast.length > 0 && (
// //             <div>
// //               <h3>Cast</h3>
// //               <CastList>
// //                 {cast.map(actor => (
// //                   <CastItem key={actor.id}>
// //                   <CastImg src={IMAGE_URL + actor.profile_path} alt={actor.name} />
// //                   <span>{actor.name}</span>
// //                 </CastItem>
// //                 ))}
// //               </CastList>
// //             </div>
// //           )}
// //           {reviews.length > 0 && (
// //             <Wrapper>
// //               <h3>Reviews</h3>
// //               <ul>
// //                 {reviews.map(review => (
// //                   <li key={review.id}>
// //                     <h3>{review.author}</h3>
// //                     <p>{review.content}</p>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </Wrapper>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default MovieDetails;