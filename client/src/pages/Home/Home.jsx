import { useSelector } from 'react-redux';
import { Cards } from '../../components';
import styles from './Home.module.css';

const HomePage = () => {
    const { pokemons } = useSelector((state) => state);
    return (
        <div className={styles.container}>
            <h1>Home</h1>
            <Cards pokemons={pokemons} />
        </div>
    )
};
export default HomePage;