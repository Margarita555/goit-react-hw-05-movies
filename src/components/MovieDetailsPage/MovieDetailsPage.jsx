import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Route,
  Routes,
  // Link,
  useNavigate,
} from 'react-router-dom';
import * as movieApi from '../../services/movieAPI';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import styles from './MovieDetailsPage.module.css';

export default function MovieView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  // const [credit, setCredit] = useState([]);
  let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }
  useEffect(() => {
    movieApi.fetchMovieById(movieId).then(setMovie);
    // movieApi.fetchMovieCast(movieId).then(setCredit);
  }, [movieId]);
  console.log(movie);

  // useEffect(() => {
  //   movieApi.fetchMovieCast(movieId).then(setCredit);
  // }, [movieId]);
  // console.log(credit.cast);

  return (
    <>
      <button onClick={handleClick}>go home</button>
      {/* <Link to="..">
        <button className={styles.goBackBtn}>Go back</button>
      </Link> */}
      {movie && (
        <>
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
          <div className={styles.additionalInformation}>
            <ul>
              <li>
                <NavLink end to="cast">
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink to="rewiews">Reviews</NavLink>
              </li>
            </ul>
          </div>
          ;
          <Routes>
            <Route path="cast" element={<Cast movieId={movieId} />} />
            <Route path="rewiews" element={<Reviews />} />
          </Routes>
        </>
      )}
    </>
  );
}
