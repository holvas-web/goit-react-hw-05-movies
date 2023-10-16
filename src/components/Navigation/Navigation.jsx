import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
    <nav>
        <Link
            exact
            to="/"
            className={styles.link}
            activeClassName={styles.activeLink}
        >
            Home
        </Link>

        <Link
            to="/movies"
            className={styles.link}
            activeClassName={styles.activeLink}
        >
            Movies
        </Link>
    </nav>
);

export default Navigation;