import { useState, useEffect } from 'react';
import defaultImage from '../../../../images/person.png';

import * as movieApi from '../../../../services/movieAPI';
import styles from './Cast.module.css';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cleanup = false;
    async function fetchData() {
      try {
        const data = await movieApi.fetchMovieCast(movieId);
        if (!cleanup) {
          setCast(data);
        }
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }
    fetchData();
    return () => (cleanup = true);
  }, [movieId]);

  return (
    <div className={styles.container}>
      {error && <h2 className={styles.errorMessage}>No movies found</h2>}
      {cast && (
        <ul className={styles.gallery}>
          {cast.cast.map(({ cast_id, name, character, profile_path }) => (
            <li key={cast_id} className={styles.galleryItem}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                  alt={name}
                  width="150"
                />
              ) : (
                <img
                  className={styles.defaultImage}
                  src={defaultImage}
                  alt={name}
                  width="150"
                />
              )}
              <p className={styles.name}>{name}</p>
              <p className={styles.name}>{character}</p>
            </li>
          ))}
        </ul>
      )}
      {cast && !cast.cast.length && (
        <p className={styles.message}>
          We don't have any information about the cast for this movie.
        </p>
      )}
    </div>
  );
}
