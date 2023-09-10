// src/components/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/',
          {
            params: {
              api_key: '2c3efb2d795661188f5f8e1565ebf9ff',
            },
          }
        );
        setTrendingMovies(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {trendingMovies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
