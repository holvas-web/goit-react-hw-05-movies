// src/components/Movies.js

// Movies.js
import React, { useState } from 'react';
import { searchMovies } from 'services/api';

export function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const results = await searchMovies(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchResults.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
} 