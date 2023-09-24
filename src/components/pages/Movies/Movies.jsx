// Movies.js

import React, { useState } from 'react';
import { searchMovies } from 'services/api';
import { Wrapper } from './MoviesStyled.styled';
import { Link } from 'react-router-dom';

function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми (перезавантаження сторінки)
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
    <Wrapper>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}> {/* Змінено onClick на onSubmit */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button> {/* Змінено тип кнопки на submit */}
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchResults.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
}


// import React, { useState } from 'react';
// import { searchMovies } from 'services/api';
// import { Wrapper } from './MoviesStyled.styled';
// import { Link } from 'react-router-dom';

// function Movies() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSearch = async () => {
//     setIsLoading(true);
//     try {
//       const results = await searchMovies(searchQuery);
//       setSearchResults(results);
//     } catch (error) {
//       console.error('Error searching movies:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Wrapper>
//       <h1>Search Movies</h1>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {searchResults.map((movie) => (
//             <li key={movie.id}>
//               <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </Wrapper>
//   );
// } 

export default Movies