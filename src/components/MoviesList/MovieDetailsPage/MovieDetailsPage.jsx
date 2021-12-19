import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import * as movieApi from '../../../services/movieAPI';
import Spinner from '../../Spinner/Spinner';
// import Cast from '../Cast/Cast';
// import Reviews from '../Reviews/Reviews';
import defaultImage from '../../../images/posterbackground.jpg';
import styles from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /* webpackChunkName: "Reviews" */),
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }

  useEffect(() => {
    setLoading(true);
    let cleanup = false;

    async function fetchData() {
      try {
        const data = await movieApi.fetchMovieById(movieId);
        if (!cleanup) {
          setMovie(data);
        }
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    return () => (cleanup = true);
  }, [movieId]);

  // const score = () => {
  //   return Math.round(Number(movie.vote_average));
  // };
  return (
    <div className={styles.container}>
      <button onClick={handleClick} className={styles.goBackBtn}>
        Go home
      </button>
      {/* <Link to="..">
        <button>Go back</button>
      </Link> */}
      {loading && <Spinner />}
      {error && <h2 className={styles.errorMessage}>No movies found</h2>}
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
              <h1 className={styles.movieTitle}>{movie.title}</h1>
              <p className={styles.scoreTitle}>
                User score:
                <span className={styles.score}>{movie.vote_average * 10}%</span>
              </p>
              <h2 className={styles.overviewTitle}>Overview</h2>
              <p className={styles.overview}>{movie.overview}</p>
              <h3 className={styles.genresTitle}>Genres</h3>
              {movie.genres &&
                movie.genres.map(({ id, name }) => (
                  <span key={id} className={styles.genres}>
                    {name}
                  </span>
                ))}
            </div>
          </div>
          <div className={styles.additionalInformation}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <NavLink
                  to="cast"
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ''
                  }
                >
                  Cast
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <NavLink
                  to="rewiews"
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ''
                  }
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>

          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route
                path="cast"
                element={movie && <Cast movieId={movieId} />}
              />
              <Route path="rewiews" element={<Reviews movieId={movieId} />} />
            </Routes>
          </Suspense>
        </>
      )}
    </div>
  );
}
