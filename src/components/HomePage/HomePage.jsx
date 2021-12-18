import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import * as movieApi from '../../services/movieAPI';
import MoviesList from '../MoviesList/MoviesList';
import Spinner from '../Spinner/Spinner';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    movieApi
      .fetchTrendingMovies()
      .then(obj => obj.results)
      .then(setTrendingMovies)
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);
  // console.log(trendingMovies);
  return (
    <>
      <h1 className={styles.title}>Trending Today</h1>
      {loading && <Spinner />}
      {error && <p className={styles.errorMessage}>{error.message}</p>}
      <MoviesList movies={trendingMovies} />
      {/* <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul> */}
    </>
  );
}
