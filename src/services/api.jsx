const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '2c3efb2d795661188f5f8e1565ebf9ff';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not fond'));
}

export function fetchTrendingMovies() {
    return fetchWithErrorHandling(`${BASE_URL}/trending/all/day?api_key=${KEY}`);
}

export function fetchMoviesId(movieId) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`);
}

export function fetchMovieSearch(query) {
    return fetchWithErrorHandling(`${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
}

export function fetchMovieCast(movieId) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
}

export function fetchMovieReviews(movieId) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`);
}


// // api.js
// import axios from 'axios';

// const API_KEY = '2c3efb2d795661188f5f8e1565ebf9ff';
// const api = axios.create({
//   baseURL: 'https://api.themoviedb.org/3',
//   params: {
//     api_key: API_KEY,
//   },
// });

// export const fetchTrendingMovies = async () => {
//   try {
//     const response = await api.get('/trending/movie/week');
//     return response.data.results;
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchMovieCast = async (movieId) => {
//   try {
//     const response = await api.get(`/movie/${movieId}/credits`);
//     return response.data.cast;
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchMovieDetails = async (movieId) => {
//   try {
//     const response = await api.get(`/movie/${movieId}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const searchMovies = async (query) => {
//   try {
//     const response = await api.get('/search/movie', { params: { query } });
//     return response.data.results;
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchMovieReviews = async (movieId) => {
//   try {
//     const response = await api.get(`/movie/${movieId}/reviews`);
//     return response.data.results;
//   } catch (error) {
//     throw error;
//   }
// };
