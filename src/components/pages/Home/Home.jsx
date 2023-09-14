// Home.js
import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { Link } from 'react-router-dom';
// import { MovieDetails } from '../MovieDetails/MovieDetails';

export function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {trendingMovies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
{/* 
      <Routes>
        <Routes>
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </Routes> */}

    </div>
  );
}


