import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import { validate, validateTypes } from '../../utils/validate';

const Form = ({ addPokemon, allTypes }) => {
    const [newPokemon, setNewPokemon] = useState(
        {
            name: '',
            image: '',
            hp: null,
            attack: null,
            defense: null,
            speed:undefined,
            height:undefined,
            weight:undefined,
            typeIds: []
        }
    );
    const [errors, setErrors] = useState({});

    const [send, setSend] = useState(false);
    
    useEffect(() => {
        setErrors(validate(newPokemon));
    }, [newPokemon]);

    useEffect(() => {
        setSend((Object.getOwnPropertyNames(errors).length) === 0);
    }, [errors]);

    const handleSubmit = (event) => {
        event.preventDefault();
        addPokemon(newPokemon);
        setNewPokemon(
            {
                name: '',
                image: '',
                hp: null,
                attack: null,
                defense: null,
                speed:undefined,
                height:undefined,
                weight:undefined,
                typeIds: []
            }
        );
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name !== 'types') {
            setNewPokemon({ ...newPokemon, [name]: value });
        } else {
            setNewPokemon({ ...newPokemon, typeIds: validateTypes([...newPokemon.typeIds, parseInt(value)]) });
        };
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} autoComplete='off' >
                <div className={styles.input}>
                    <label className={styles.label}>Name:</label>
                    <input type='text' name='name' value={newPokemon.name} onChange={handleChange} placeholder='Name' /> <br />
                    <p>{errors.name}</p>
                </div>
                <div className={styles.input}>
                    <label className={styles.label}>Image:</label>
                    <input type='text' name='image' value={newPokemon.image} onChange={handleChange} placeholder='Image' /> <br />
                    <p>{errors.image}</p>
                </div>
                <div className={styles.input}>
                    <label className={styles.label}>Hp:</label>
                    <input type='number' name='hp' value={newPokemon.hp} onChange={handleChange} placeholder='life' /> <br />
                    <p>{errors.hp}</p>
                </div>
                <div className={styles.input}>
                    <label className={styles.label}>Attack:</label>
                    <input type='number' name='attack' value={newPokemon.attack} onChange={handleChange} placeholder='attack' /> <br />
                    <p>{errors.attack}</p>
                </div>
                <div className={styles.input}>
                    <label className={styles.label}>Defense:</label>
                    <input type='number' name='defense' value={newPokemon.defense} onChange={handleChange} placeholder='defense' /> <br />
                    <p>{errors.defense}</p>
                </div>
                <div className={styles.input}>
                    <label className={styles.label}>Speed:</label>
                    <input type='text' name='speed' value={newPokemon.speed} onChange={handleChange} placeholder='speed' /> <br />
                    <p>{errors.speed}</p>
                </div>
                <div className={styles.input}>
                    <label className={styles.label}>Height:</label>
                    <input type='text' name='height' value={newPokemon.height} onChange={handleChange} placeholder='height' /> <br />
                    <p>{errors.height}</p>
                </div>
                <div className={styles.input}>
                    <label className={styles.label}>Weight:</label>
                    <input type='text' name='weight' value={newPokemon.weight} onChange={handleChange} placeholder='weight' /> <br />
                    <p>{errors.weight}</p>
                </div>
                <div className={styles.input}>
                    <label className={styles.label}>
                        Types:
                        <select onChange={handleChange} name='types' value={'default'}>
                            <option value="default" disabled>Select types</option>
                            {allTypes.sort((a, b) => a.name.localeCompare(b.name)).map((type) => (
                                <option key={type.id} value={type.id}>{type.name}</option>
                            ))}
                        </select>
                    </label>
                    {newPokemon.typeIds.length !== 0 && newPokemon.typeIds.map((typeId, i) => {
                        const type = allTypes.find((t) => t.id === typeId);
                        return (
                            <button type='button' key={i} name='types' value={type.id} onClick={handleChange} className={styles.types_selected}>
                                {type && type.name}
                            </button>
                        );
                    })}
                    <p>{errors.typeIds}</p>
                </div>
                <button type='submit' disabled={!send} className={styles.send_btn}>Create</button>
            </form>
        </div>
    );
};

export default Form;