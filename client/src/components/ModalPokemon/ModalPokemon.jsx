import { useDispatch, useSelector } from 'react-redux';
import styles from './ModalPokemon.module.css';
import { NavLink } from 'react-router-dom';
import { setShowModal } from '../../redux/actions';

const ModalPokemon = () => {
    const pokemon = useSelector((state) => state.pokemonDetail);
    const dispatch = useDispatch();
    const handleClick = () => { dispatch(setShowModal(false)); };
    return (
        <div className={styles.container}>
            <img src={pokemon?.image} alt={pokemon?.name} className={styles.image} />
            <button type='button' onClick={handleClick} className={styles.btn_close}>close</button>
            <div className={styles.details}>
                <div className={styles.description}>
                    <h3>Name:  {pokemon?.name}</h3>

                </div>
                <div className={styles.description}>
                    <h3>Types: {pokemon?.types[0].name.toLowerCase()} {pokemon?.types[1] && `, ${pokemon?.types[1].name.toUpperCase()}`}</h3>
                </div>
                <NavLink to={`Details/${pokemon.id}`} onClick={handleClick} className={styles.link}>Ver detalles</NavLink>
            </div>
        </div>
    );
};
export default ModalPokemon;