import React, { useState, useEffect } from 'react';
import { Link, useParams  } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { Wrapper } from '../MovieDetails/MovieDetails.styled';

function MovieDetails() {
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
        <Wrapper>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
        </Wrapper>
      )}
    </div>
  );
}

export default MovieDetails