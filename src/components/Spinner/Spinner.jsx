import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <Loader
      className={styles.loader}
      type="Oval"
      color="#3f51b5"
      height={60}
      width={60}
    />
  );
};

export default Spinner;
