import styles from './Card.module.css';
import { Link } from 'react-router-dom';
const Card = ({ pokemon }) => {
    return (
        <Link to={`/Details/${pokemon.id}`} className={styles.container}>
            <img src={pokemon.image} alt={pokemon.name} className={styles.image}/>
            <h3>ID: {pokemon.id}</h3>
            <h3>NAME: {pokemon.name}</h3>
            {/* <h3>HP: {pokemon.hp}</h3>
            <h3>ATTACK: {pokemon.attack}</h3>
            <h3>DEFENSE: {pokemon.defense}</h3>
            <h3>SPEED: {pokemon.speed}</h3> */}
            {/* <h3>TYPE: {pokemon.types[0]?.name.toUpperCase()} {pokemon.types[1] && `, ${pokemon.types[1].name.toUpperCase()}`}</h3> */}
        </Link>
    );
};
export default Card;