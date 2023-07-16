import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { Search } from '../';

const Header = () => {
    return (
        <div className={styles.container}>
            <Link to={'/Home'}>Home</Link>
            <Link to={'/create'}>New Pokemon</Link>
            <Search />
        </div>
    );
};

export default Header;