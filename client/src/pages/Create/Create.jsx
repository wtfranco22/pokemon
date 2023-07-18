import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../../components';
import styles from './Create.module.css';
import { createPokemon } from '../../redux/actions';
const Create = () => {
    const allTypes = useSelector((state) => state.allTypes);
    const dispatch = useDispatch();
    const addPokemon = (pokemon) => {
        dispatch(createPokemon(pokemon));
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Create pokémon</h3>
            </div>
            <Form addPokemon={addPokemon} allTypes={allTypes} />
        </div>
    );
};

export default Create;