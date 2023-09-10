// src/components/Cast.js

// Cast.js
import React, { useState, useEffect } from 'react';
import { fetchMovieCast } from 'services/api';

export function Cast({ match }) {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const castData = await fetchMovieCast(match.params.id);
        setCast(castData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    fetchData();
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



