// src/components/Cast.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Cast({ match }) {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieCast = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${match.params.id}/credits`,
          {
            params: {
              api_key: '2c3efb2d795661188f5f8e1565ebf9ff',
            },
          }
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCast();
  }, [match.params.id]);

  return (
    <div>
      <h1>Cast</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>{actor.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}