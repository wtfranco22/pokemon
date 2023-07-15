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
        <>
            <div className={styles.container}>
                create new pokemon
            </div>
            <Form addPokemon={addPokemon} allTypes={allTypes}/>
        </>
    );
};

export default Create;