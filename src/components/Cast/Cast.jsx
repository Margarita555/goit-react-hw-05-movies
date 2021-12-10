import { useState, useEffect } from 'react';
// import
// useParams,
// NavLink,
// Route,
// Routes,
// Link,
// useNavigate,
// 'react-router-dom';
import * as movieApi from '../../services/movieAPI';
// import styles from './Cast.module.css';

export default function Cast({ movieId }) {
  // const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    movieApi.fetchMovieCast(movieId).then(setCast);
  }, [movieId]);
  console.log(cast.cast);

  return (
    <>
      {cast && (
        <ul>
          ffffffffffffffffff
          {/* {cast.cast.map(actor => (
            <li key={actor.cast_id}>
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))} */}
        </ul>
      )}
    </>
  );
}
// adult: false
// cast_id: 1
// character: "Malik Khan"
// credit_id: "5f21a38043999b0037544207"
// gender: 2
// id: 53240
// known_for_department: "Acting"
// name: "Riz Ahmed"
// order: 1
// original_name: "Riz Ahmed"
// popularity: 5.235
// profile_path: "/1uP9RaX7BGVx7XGT

//  <li>
//    <img
//      className={styles.actorPhoto}
//      src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
//      alt={actor.name}
//      width="100"
//    />
//    <p>{actor.name}</p>
//    <p>{actor.character}</p>
//  </li>;
