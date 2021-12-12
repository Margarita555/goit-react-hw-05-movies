import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Route,
  Routes,
  // Link,
  useNavigate,
} from 'react-router-dom';
// import ErrorBoundary from '../../services/ErrorBoundary';
import * as movieApi from '../../services/movieAPI';
// import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import defaultImage from '../../images/posterbackground.jpg';
import styles from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "Cast" */));

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  // const [cast, setCast] = useState([]);

  let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }

  useEffect(() => {
    let cleanup = false;

    movieApi.fetchMovieById(movieId).then(data => {
      if (!cleanup) {
        setMovie(data);
      }
    });
    return () => (cleanup = true);
  }, [movieId]);
  console.log(movie);

  return (
    <>
      <button onClick={handleClick}>go home</button>
      {/* <Link to="..">
        <button className={styles.goBackBtn}>Go back</button>
      </Link> */}
      {movie && (
        <>
          <div className={styles.wrapper}>
            {movie.poster_path ? (
              <img
                className={styles.movieImage}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width="300"
              />
            ) : (
              defaultImage
            )}
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
                movie.genres.map(({ id, name }) => (
                  <span key={id} className={styles.genre}>
                    {name}
                  </span>
                ))}
            </div>
          </div>
          <div className={styles.additionalInformation}>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="rewiews">Reviews</NavLink>
              </li>
            </ul>
          </div>

          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route
                path="cast"
                element={
                  movie && (
                    // <ErrorBoundary>
                    <Cast movieId={movieId} />
                  )
                  // </ErrorBoundary>
                }
              />
              <Route path="rewiews" element={<Reviews movieId={movieId} />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}
