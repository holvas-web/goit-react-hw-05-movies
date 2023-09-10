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


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export function MovieDetails({ match }) {
//   const [movieDetails, setMovieDetails] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/movie/${match.params.id}`,
//           {
//             params: {
//               api_key: '2c3efb2d795661188f5f8e1565ebf9ff',
//             },
//           }
//         );
//         setMovieDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching movie details:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchMovieDetails();
//   }, [match.params.id]);

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <h1>{movieDetails.title}</h1>
//           <p>{movieDetails.overview}</p>
//         </div>
//       )}
//     </div>
//   );
// }
