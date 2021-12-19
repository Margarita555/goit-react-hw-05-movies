import { useState, useEffect } from 'react';
import * as movieApi from '../../../../services/movieAPI';
import styles from './Reviews.module.css';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    let cleanup = false;

    async function fetchData() {
      try {
        const data = await movieApi.fetchMovieReviews(movieId);
        if (!cleanup) {
          setReviews(data);
        }
      } catch (error) {
        console.log(error);
        setError(error);
      }
      // finally {
      //   setLoading(false);
      // }
    }
    fetchData();
    // movieApi.fetchMovieReviews(movieId).then(data => {
    //   if (!cleanup) {
    //     setReviews(data);
    //   }
    // });
    return () => (cleanup = true);
  }, [movieId]);
  console.log(reviews.results);

  return (
    <div className={styles.container}>
      {error && <h2 className={styles.errorMessage}>No movies found</h2>}

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
      {reviews && !reviews.results.length && (
        <p className={styles.message}>
          We don't have any reviews for this movie.
        </p>
      )}
    </div>
  );
}
