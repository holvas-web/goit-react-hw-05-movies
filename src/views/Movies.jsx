import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Searchbar from '../components/Searchbar/Searchbar';
import MoviesGallery from '../components/MoviesGallery/MoviesGallery';
import { fetchMovieSearch } from '../services/api';

export default function MoviesPage() {
    const [setSearchQuery] = useState('');
    const [movies, setMovies] = useState(null);
    const location = useLocation();

    const query = new URLSearchParams(location.search).get('query') ?? '';

    useEffect(() => {
        if (!query) {
            return;
        }

        fetchMovieSearch(query).then(request => {
            setMovies(request.results);
        });
    },[query])

    const onClick = request => {
        setSearchQuery(request);
}

    return (
        <>
            <Searchbar onSubmit={onClick} />
            
            {movies && <MoviesGallery movies={movies} />}
        </>
    )
};



// // Movies.js
// import React, { useState } from 'react';
// import { searchMovies } from 'services/api';
// import { Wrapper } from '../components/pages/Movies/MoviesStyled.styled';
// import { Link, useLocation } from 'react-router-dom';

// function Movies() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const location = useLocation();
//   const goBack = location.state?.from ?? '/movies';

//   const handleSearch = async (event) => {
//     event.preventDefault(); // Зупиняємо стандартну поведінку форми (перезавантаження сторінки)
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
//       <Link to={goBack}>Go back</Link>
//       <h1>Search Movies</h1>
//       <form onSubmit={handleSearch}> {/* Змінено onClick на onSubmit */}
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button type="submit">Search</button> {/* Змінено тип кнопки на submit */}
//       </form>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {searchResults.map((movie) => (
//             <li key={movie.id}>
//               <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </Wrapper>
//   );
// }


// // import React, { useState } from 'react';
// // import { searchMovies } from 'services/api';
// // import { Wrapper } from './MoviesStyled.styled';
// // import { Link } from 'react-router-dom';

// // function Movies() {
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [searchResults, setSearchResults] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handleSearch = async () => {
// //     setIsLoading(true);
// //     try {
// //       const results = await searchMovies(searchQuery);
// //       setSearchResults(results);
// //     } catch (error) {
// //       console.error('Error searching movies:', error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <Wrapper>
// //       <h1>Search Movies</h1>
// //       <input
// //         type="text"
// //         value={searchQuery}
// //         onChange={(e) => setSearchQuery(e.target.value)}
// //       />
// //       <button onClick={handleSearch}>Search</button>
// //       {isLoading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <ul>
// //           {searchResults.map((movie) => (
// //             <li key={movie.id}>
// //               <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </Wrapper>
// //   );
// // } 

// export default Movies