import { Link, useLocation } from 'react-router-dom';
import defaultImage from '../../images/posterbackground.jpg';
import styles from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <>
      <ul className={styles.gallery}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.galleryItem}>
            <Link
              to={
                location.pathname === '/' ? `movies/${movie.id}` : `${movie.id}`
              }
            >
              {movie.poster_path ? (
                <img
                  className={styles.movieImage}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width="180"
                />
              ) : (
                <img
                  className={styles.defaultImage}
                  src={defaultImage}
                  alt="cinema strip"
                  width="180"
                />
              )}
              <p className={styles.movieTitle}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
