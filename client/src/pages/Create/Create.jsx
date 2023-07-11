import { useDispatch } from 'react-redux';
import { Form } from '../../components';
import styles from './Create.module.css';
import { createPokemon } from '../../redux/actions';
const Create = () => {
    const dispatch = useDispatch();
    const addPokemon = (pokemon) => {
        dispatch(createPokemon(pokemon));
    }
    return (
        <>
            <div className={styles.container}>
                create new pokemon
            </div>
            <Form addPokemon={addPokemon}/>
        </>
    );
};

export default Create;