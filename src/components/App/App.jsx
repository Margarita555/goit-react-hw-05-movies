import { Route, Routes } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';
// import styles from './App.module.css';

function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </Container>
  );
}

export default App;
