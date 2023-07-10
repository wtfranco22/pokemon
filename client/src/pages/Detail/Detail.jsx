import usePokemon from '../../hooks/usePokemon';
import styles from './Detail.module.css';
import { Profile } from '../../components';

const Detail = () => {
    const pokemon = usePokemon();
    return (
        <div className={styles.container}>
            <Profile pokemon={pokemon}/>
        </div>
    );
};

export default Detail;