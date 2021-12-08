import Navigation from '../Navigation/Navigation';
import styles from './AppBar';

export default function AppBar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
