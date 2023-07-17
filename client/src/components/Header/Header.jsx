import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { Search } from '../';
import { SiPokemon } from 'react-icons/si';
const Header = () => {
    return (
        <div className={styles.container}>
            <NavLink to={'/Home'} className={styles.icon}>
                <SiPokemon />
            </NavLink>
            <Search />
        </div>
    );
};

export default Header;