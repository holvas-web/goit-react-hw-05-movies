// src/components/Reviews.js

// Reviews.js
import React, { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/api';
import { useParams } from 'react-router-dom';
import { Wrapper } from '../Reviews/Reviews.styled';


function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewData = await fetchMovieReviews(id);
        setReviews(reviewData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
   <Wrapper>
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
    </Wrapper>
  );
}

export default Reviews


