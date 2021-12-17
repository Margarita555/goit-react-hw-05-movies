import { NavLink } from 'react-router-dom';
// import styles from './Navigation.module.css';
import './Navigation.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      end
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      Home
    </NavLink>
    <NavLink
      to="movies"
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
