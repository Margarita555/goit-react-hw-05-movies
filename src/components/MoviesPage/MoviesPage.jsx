import { useState, useEffect } from 'react';
import * as movieApi from '../../services/movieAPI';
import Searchbar from '../Searchbar/Searchbar';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import styles from './MoviesPage.module.css';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(movies);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    // setLoading(true);
    movieApi
      .fetchMovieByQuery(searchQuery)
      .then(({ results }) => {
        setMovies([...results]);
      })
      .catch(error => setError({ error }));
    // .finally(() => setLoading(false));
  }, [searchQuery]);

  const handleFormSubmit = query => {
    setSearchQuery(query);
    setMovies([]);
  };

  return (
    <div className={styles.searchbar}>
      <Searchbar onSubmit={handleFormSubmit} />
      {/* {loading && <LoadingElement />} */}
      {error && <h1 className={styles.errorMessage}>{error.message}</h1>}
      {/* <MoviesList movies={movies} /> */}
    </div>
  );
}
