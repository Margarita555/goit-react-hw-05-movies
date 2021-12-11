import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import MoviesPage from '../MoviesPage/MoviesPage';
// import styles from './App.module.css';

function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="movies/*" element={<MoviesPage />}></Route>
        <Route path="movies/:movieId/*" element={<MovieDetailsPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
