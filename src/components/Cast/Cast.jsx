import { useState, useEffect } from 'react';
import defaultImage from '../../images/person.png';

import * as movieApi from '../../services/movieAPI';
import styles from './Cast.module.css';

export default function Cast({ movieId }) {
  // console.log(movieId);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    let cleanup = false;
    movieApi.fetchMovieCast(movieId).then(data => {
      if (!cleanup) {
        setCast(data);
      }
    });

    return () => (cleanup = true);
  }, [movieId]);

  return (
    <div className={styles.container}>
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
    </div>
  );
}
// adult: false
// cast_id: 1
// character: "Malik Khan"
// credit_id: "5f21a38043999b0037544207"
// gender: 2
// id: 53240
// known_for_department: "Acting"
// name: "Riz Ahmed"
// order: 1
// original_name: "Riz Ahmed"
// popularity: 5.235
// profile_path: "/1uP9RaX7BGVx7XGT
