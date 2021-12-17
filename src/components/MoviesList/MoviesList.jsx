import { Link, useLocation } from 'react-router-dom';
// import styles from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={
                location.pathname === '/' ? `movies/${movie.id}` : `${movie.id}`
              }
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
