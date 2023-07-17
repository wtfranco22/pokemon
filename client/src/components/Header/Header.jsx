import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { Search } from '../';
import { SiPokemon } from 'react-icons/si';
const Header = () => {
    return (
        <div className={styles.container}>
            <Link to={'/Home'} className={styles.icon}>
                <SiPokemon />
            </Link>
            <Search />
        </div>
    );
};

export default Header;