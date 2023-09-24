// api.js
import axios from 'axios';

const API_KEY = '2c3efb2d795661188f5f8e1565ebf9ff';
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrendingMovies = async () => {
  try {
    const response = await api.get('/trending/movie/week');
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await api.get('/search/movie', { params: { query } });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
