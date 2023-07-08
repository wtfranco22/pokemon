import { NavLink } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = ({ start }) => {
    const handleClick = () => {
        start(true);
    };
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <NavLink to='/Home' onClick={handleClick} className={styles.link} > START </NavLink>
            </div>
        </div>
    );
};
export default LandingPage;