import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as movieApi from '../../services/movieAPI';
import styles from './HomePage.module.css';

export default function HomeView() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    movieApi
      .fetchTrendingMovies()
      .then(obj => obj.results)
      .then(setTrendingMovies);
  }, []);
  console.log(trendingMovies);
  return (
    <>
      <h1 className={styles.title}>Trending Today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
