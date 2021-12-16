import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import styles from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // if (query.trim() === '') {
    //   toast('Type in the keyword');
    //   return;
    // }

    onSubmit(query);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* <ToastContainer /> */}
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={handleQueryChange}
        autoComplete="off"
        autoFocus
        placeholder="Search a movie"
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
