import { useState, useEffect } from 'react';
import MoviesGallery from '../components/MoviesGallery/MoviesGallery';
import { fetchTrendingMovies } from '../services/api';
// import { GlobalStyle } from '../components/GlobalStyle';

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetchTrendingMovies()
            .then(request => setMovies(request.results)
            );
    }, [])

    // console.log(movies);
    return (
        <>
            <h1>Trending today</h1>

            <MoviesGallery movies={movies} />
        </>
    );
};


// // Home.js
// import React, { useState, useEffect } from 'react';
// import { fetchTrendingMovies } from 'services/api';
// import { Link, useLocation } from 'react-router-dom';
// // import { MovieDetails } from '../MovieDetails/MovieDetails';

// function Home() {
//   const [trendingMovies, setTrendingMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const movies = await fetchTrendingMovies();
//         setTrendingMovies(movies);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching trending movies:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Popular Movies</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {trendingMovies.map((movie) => (
//             <li key={movie.id}>
//               <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
//             </li>
//           ))}
//         </ul>
//       )}
// {/* 
//       <Routes>
//         <Routes>
//           <Route path="/movies/:id" element={<MovieDetails />} />
//         </Routes>
//       </Routes> */}

//     </div>
//   );
// }

// export default Home
