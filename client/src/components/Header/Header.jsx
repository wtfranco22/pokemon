import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <Link to={'/Home'}>Home</Link>
            <Link to={'/create'}>New Pokemon</Link>
        </div>
    );
};

export default Header;