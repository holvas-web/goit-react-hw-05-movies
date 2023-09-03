// src/components/Reviews.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Reviews({ match }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${match.params.id}/reviews`,
          {
            params: {
              api_key: '2c3efb2d795661188f5f8e1565ebf9ff',
            },
          }
        );
        setReviews(response.data.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieReviews();
  }, [match.params.id]);

  return (
   <div>
      <h1>Reviews</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 
