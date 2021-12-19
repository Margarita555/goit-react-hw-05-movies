import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import HomePage from '../HomePage/HomePage';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Spinner from '../Spinner/Spinner';

const HomePage = lazy(() =>
  import('../HomePage/HomePage' /* webpackChunkName: "HomePage" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    '../MoviesList/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);
const MoviesPage = lazy(() =>
  import('../MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="movies/*" element={<MoviesPage />}></Route>
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
