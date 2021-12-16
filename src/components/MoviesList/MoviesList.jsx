import { Link } from 'react-router-dom';
// import styles from './MovieList.module.css';

export default function MoviesList({ movies }) {
  // console.log(movies);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
