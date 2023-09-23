import React, { useState, useEffect } from 'react';
import { fetchMovieCast } from 'services/api';
import { useParams } from 'react-router-dom'; // Додали імпорт useParams

function Cast() {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams(); // Використовуємо useParams для отримання id з роутера

  useEffect(() => {
    const fetchData = async () => {
      try {
        const castData = await fetchMovieCast(id);
        setCast(castData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    fetchData();
  }, [id]); // Включаємо id в список залежностей useEffect

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

export default Cast

// // Cast.js
// import React, { useState, useEffect, useParams } from 'react';
// import { fetchMovieCast } from 'services/api';

// export function Cast() {
//   const [cast, setCast] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const castData = await fetchMovieCast(id);
//         setCast(castData);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching cast:', error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   return (
//     <div>
//       <h1>Cast</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {cast.map((actor) => (
//             <li key={actor.id}>{actor.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }



