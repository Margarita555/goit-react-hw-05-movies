import { useState, useEffect } from 'react';
import { useParams, NavLink, Route, Routes } from 'react-router-dom';
import * as movieApi from '../../services/movieAPI';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import styles from './MovieDetailsPage.module.css';

export default function MovieView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    movieApi
      .fetchMovieById(movieId)
      // .then(obj => obj.results)
      .then(setMovie);
  }, [movieId]);
  console.log(movie);
  console.log(movie.genres);
  return (
    <>
      <button className={styles.goBackBtn}>Go back</button>
      {movie && (
        <div className={styles.wrapper}>
          <img
            className={styles.movieImage}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="300"
          />
          <div className={styles.details}>
            <h1 className={styles.filmTitle}>{movie.title}</h1>
            <p className={styles.scoreTitle}>
              User score:
              <span className={styles.score}>{movie.popularity}</span>
            </p>
            <h2 className={styles.overviewTitle}>Overview</h2>
            <p className={styles.overview}>{movie.overview}</p>
            <h3 className={styles.title}>Genres</h3>
            {movie.genres &&
              movie.genres.map(genre => (
                <span key={genre.id} className={styles.genre}>
                  {genre.name}
                </span>
              ))}
          </div>
        </div>
      )}
      <div className={styles.additionalInformation}>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
            <NavLink to="rewiews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      ;
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="rewiews" element={<Reviews />} />
      </Routes>
    </>
  );
}
