import styles from './Profile.module.css';

const Profile = ({ pokemon }) => {
    return (
        <div className={styles.container}>
            <img src={pokemon?.image} alt={pokemon?.name} className={styles.image} />
            <div>
                <h3>ID: {pokemon?.id}</h3>
                <h3>Name: {pokemon?.name}</h3>
                <h3>HP: {pokemon?.hp}</h3>
                <h3>Attack: {pokemon?.attack}</h3>
                <h3>Defense: {pokemon?.defense}</h3>
                {pokemon?.speed && <h3>Speed: {pokemon.speed}</h3>}
                {pokemon?.weight && <h3>Weight: {pokemon.weight}</h3>}
                {pokemon?.height && <h3>Height: {pokemon.height}</h3>}
                <h3>TYPE: {pokemon?.types[0].name} {pokemon?.types[1] && `, ${pokemon?.types[1].name}`}</h3>
            </div>
        </div>
    );
};
export default Profile;