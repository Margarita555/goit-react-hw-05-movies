import { useState, useEffect } from 'react';
import * as movieApi from '../../services/movieAPI';
import styles from './Reviews.module.css';

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
      <ul>
        {reviews &&
          reviews.results.map(({ author, content, id }) => (
            <li key={id}>
              <h3 className={styles.authorTitle}>
                Author:<span className={styles.authorName}>{author}</span>
              </h3>
              <p className={styles.content}>{content}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
