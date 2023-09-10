// src/components/MovieDetails.js

// MovieDetails.js
import React, { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'services/api';

export function MovieDetails({ match }) {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await fetchMovieDetails(match.params.id);
        setMovieDetails(details);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [match.params.id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
        </div>
      )}
    </div>
  );
}


