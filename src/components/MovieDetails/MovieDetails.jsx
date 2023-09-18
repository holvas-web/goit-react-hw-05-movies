import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { useParams } from 'react-router-dom';

export function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await fetchMovieDetails(id);
        setMovieDetails(details);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
        </div>
      )}
    </div>
  );
}
