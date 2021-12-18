import { useState, useEffect } from 'react';
import { useLocation, useNavigate, createSearchParams } from 'react-router-dom';
import * as movieApi from '../../services/movieAPI';
import MoviesList from '../MoviesList/MoviesList';
import Searchbar from '../Searchbar/Searchbar';
import Spinner from '../Spinner/Spinner';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import styles from './MoviesPage.module.css';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  let navigate = useNavigate();

  // console.log(movies);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setLoading(true);
    movieApi
      .fetchMovieByQuery(searchQuery)
      .then(({ results }) => {
        setMovies([...results]);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [searchQuery]);

  const handleFormSubmit = query => {
    setSearchQuery(query);
    setMovies([]);
    console.log(location);
    console.log(location.search);
    navigate({
      pathname: `${location.pathname}`,
      search: `?${createSearchParams({
        query: `${query}`,
      })}`,
    });
    // navigate('/');
    // navigate(...location, search: `query= ${searchQuery}`);
  };

  const queryFromUrl = new URLSearchParams(location.search).get('query');
  console.log(queryFromUrl);
  useEffect(() => {
    setSearchQuery(queryFromUrl);
  }, [queryFromUrl]);

  return (
    <div className={styles.searchbar}>
      <Searchbar onSubmit={handleFormSubmit} />
      {loading && <Spinner />}
      {error && <p className={styles.errorMessage}>{error.message}</p>}
      <MoviesList movies={movies} />
    </div>
  );
}
