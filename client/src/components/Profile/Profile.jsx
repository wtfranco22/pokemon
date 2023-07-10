import styles from './Profile.module.css';

const Profile = ({ pokemon }) => {
    return (
        <div >
            <img src={pokemon?.image} alt={pokemon?.name} className={styles.image} />
            <h3>ID: {pokemon?.id}</h3>
            <h3>NAME: {pokemon?.name}</h3>
            <h3>HP: {pokemon?.hp}</h3>
            <h3>ATTACK: {pokemon?.attack}</h3>
            <h3>DEFENSE: {pokemon?.defense}</h3>
            <h3>SPEED: {pokemon?.speed}</h3>
            <h3>TYPE: {pokemon?.types[0].name.toUpperCase()} {pokemon?.types[1] && `, ${pokemon?.types[1].name.toUpperCase()}`}</h3>
        </div>
    );
};
export default Profile;