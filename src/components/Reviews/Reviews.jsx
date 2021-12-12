import { useState, useEffect } from 'react';
import * as movieApi from '../../services/movieAPI';
// import styles from './Reviews.module.css';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    let cleanup = false;
    movieApi.fetchMovieReviews(movieId).then(data => {
      if (!cleanup) {
        setReviews(data);
      }
    });
    return () => (cleanup = true);
  }, [movieId]);
  console.log(reviews.results);

  return (
    <>
      rrr
      {/* {reviews.results[0].content} */}
    </>
  );
}
