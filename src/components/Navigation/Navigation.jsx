import { NavLink } from 'react-router-dom';
import styles from './Navigation';

const Navigation = () => (
  <nav>
    <NavLink to="/" className={styles.link} activeClassName={styles.activeLink}>
      Home
    </NavLink>
    <NavLink
      to="movies"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
