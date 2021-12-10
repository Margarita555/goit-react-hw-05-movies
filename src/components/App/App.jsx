import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';
// import styles from './App.module.css';

function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/movies/:movieId*" element={<MovieDetailsPage />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
