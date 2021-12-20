import { useNavigate, useLocation } from 'react-router-dom';
import styles from './GoBackButton.module.css';

export default function GoBackButton() {
  const location = useLocation();
  let navigate = useNavigate();

  function handleClick() {
    const pathnameArray = location.pathname.split('/');
    const lastUrlElement = pathnameArray[pathnameArray.length - 1];
    if (lastUrlElement === 'cast' || lastUrlElement === 'reviews') {
      navigate(-2);
    } else if (location.search) {
      navigate('/');
    } else {
      navigate(-1);
    }
  }
  return (
    <>
      <button onClick={handleClick} className={styles.goBackBtn}>
        Go back
      </button>
    </>
  );
}
