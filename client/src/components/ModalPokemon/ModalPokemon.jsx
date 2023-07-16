import { useDispatch, useSelector } from 'react-redux';
import styles from './ModalPokemon.module.css';
import { Link } from 'react-router-dom';
import { setShowModal } from '../../redux/actions';

const ModalPokemon = () => {
    const pokemon = useSelector((state) => state.pokemonDetail);
    const dispatch = useDispatch();
    const handleClick = () => { dispatch(setShowModal(false)); };
    return (
        <div className={styles.loading}>
            <button type='button' onClick={handleClick}>close</button>
            <img src={pokemon?.image} alt={pokemon?.name} className={styles.image} />
            <h3>NAME: {pokemon?.name}</h3>
            <h3>TYPE: {pokemon?.types[0].name.toUpperCase()} {pokemon?.types[1] && `, ${pokemon?.types[1].name.toUpperCase()}`}</h3>
            <Link to={`Details/${pokemon.id}`} onClick={handleClick} >Ver detalles</Link>
        </div>
    );
};
export default ModalPokemon;