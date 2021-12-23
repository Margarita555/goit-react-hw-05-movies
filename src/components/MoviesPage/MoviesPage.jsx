import { useState, useEffect } from 'react';
import { useLocation, useNavigate, createSearchParams } from 'react-router-dom';
import * as movieApi from '../../services/movieAPI.js';
import GoBackButton from '../MoviesList/MovieDetailsPage/GoBackButton/GoBackButton';
import MoviesList from '../MoviesList/MoviesList';
import Searchbar from '../Searchbar/Searchbar';
import Spinner from '../Spinner/Spinner';
import styles from './MoviesPage.module.css';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setLoading(true);

    async function fetchData() {
      try {
        const { results } = await movieApi.fetchMovieByQuery(searchQuery);
        setMovies([...results]);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [searchQuery]);

  const handleFormSubmit = query => {
    setSearchQuery(query);
    setMovies([]);
    navigate({
      pathname: `${location.pathname}`,
      search: `?${createSearchParams({
        query: `${query}`,
      })}`,
    });
  };

  const queryFromUrl = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    setSearchQuery(queryFromUrl);
  }, [queryFromUrl]);

  return (
    <div className={styles.wrapper}>
      <GoBackButton />
      <Searchbar onSubmit={handleFormSubmit} />
      {loading && <Spinner />}
      {error && <h2 className={styles.errorMessage}>No movies found</h2>}
      <MoviesList movies={movies} />
    </div>
  );
}
