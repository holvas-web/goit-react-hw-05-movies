import {useState, useEffect} from 'react';
import { fetchMovieCast, IMAGE_URL } from '../../services/api';

export default function Cast({ movieId }) {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovieCast(movieId).then(request => setCast(request.cast));
    }, [movieId]);

    return (
        <ul className="Cast">
            {cast.map(el => (
                <li key={el.id} className="CastItem">
                    <img src={IMAGE_URL + el.profile_path} alt={el.name} className="CastItem_img" />
                    <p className="CastItem_text">{el.name}</p>
                </li>
            ))}
        </ul>
    )
}




// import React, { useState, useEffect } from 'react';
// import { fetchMovieCast } from 'services/api';
// import { useParams } from 'react-router-dom'; // Додали імпорт useParams
// import { CastList, CastItem, CastImg} from '../components/Cast/CastStyled.styled'
// function Cast() {
//   const [cast, setCast] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const { id } = useParams(); // Використовуємо useParams для отримання id з роутера
//   const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

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
//   }, [id]); // Включаємо id в список залежностей useEffect

//   return (
//     <div>
//       <h1>Cast</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <CastList>
//           {cast.map((actor) => (
//             <CastItem key={actor.id}>
//               <CastImg src={IMAGE_URL + actor.profile_path} alt={actor.name} />
//               <span>{actor.name}</span>
//             </CastItem>
//           ))}
//         </CastList>
//       )}
//     </div>
//   );
// }

// export default Cast

// // // Cast.js
// // import React, { useState, useEffect, useParams } from 'react';
// // import { fetchMovieCast } from 'services/api';

// // export function Cast() {
// //   const [cast, setCast] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const { id } = useParams();

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const castData = await fetchMovieCast(id);
// //         setCast(castData);
// //         setIsLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching cast:', error);
// //       }
// //     };

// //     fetchData();
// //   }, [id]);

// //   return (
// //     <div>
// //       <h1>Cast</h1>
// //       {isLoading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <ul>
// //           {cast.map((actor) => (
// //             <li key={actor.id}>{actor.name}</li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // }



