import { useState, useEffect } from 'react';
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
    async function fetchData() {
      try {
        const { results } = await movieApi.fetchTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Trending Today</h1>
      {loading && <Spinner />}
      {error && <h2 className={styles.errorMessage}>No movies found</h2>}
      <MoviesList movies={trendingMovies} />
    </>
  );
}
