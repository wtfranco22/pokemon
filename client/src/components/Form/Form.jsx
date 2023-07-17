import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import { validate, validateTypes } from '../../utils/validate';

const Form = ({ addPokemon, allTypes }) => {
    const [newPokemon, setNewPokemon] = useState(
        {
            name: '',
            image: '',
            hp: 1,
            attack: 1,
            defense: 1,
            // speed: 1,
            // height: 1,
            // weight: 1,
            typeIds: []
        }
    );
    const [errors, setErrors] = useState(
        {
            name: '',
            image: '',
            hp: 0,
            attack: 0,
            defense: 0,
            speed: 0,
            height: 0,
            weight: 0,
            typeIds: ''
        }
    );
    const [send, setSend] = useState(false);
    useEffect(() => {
        // console.log(newPokemon);
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
                hp: 1,
                attack: 1,
                defense: 1,
                speed: undefined,
                height: undefined,
                weight: undefined,
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
                <label>Name:</label>
                <input type='text' name='name' value={newPokemon.name} onChange={handleChange} placeholder='Name' /> <br />
                <p>{errors.name}</p>
                <label>Image:</label>
                <input type='text' name='image' value={newPokemon.image} onChange={handleChange} placeholder='Image' /> <br />
                <p>{errors.image}</p>
                <label>Hp:</label>
                <input type='number' name='hp' value={newPokemon.hp} onChange={handleChange} placeholder='life' /> <br />
                <p>{errors.hp}</p>
                <label>Attack:</label>
                <input type='number' name='attack' value={newPokemon.attack} onChange={handleChange} placeholder='attack' /> <br />
                <p>{errors.attack}</p>
                <label>Defense:</label>
                <input type='number' name='defense' value={newPokemon.defense} onChange={handleChange} placeholder='defense' /> <br />
                <p>{errors.defense}</p>
                <label>Speed:</label>
                <input type='number' name='speed' value={newPokemon.speed} onChange={handleChange} placeholder='speed' /> <br />
                <p>{errors.speed}</p>
                <label>Height:</label>
                <input type='number' name='height' value={newPokemon.height} onChange={handleChange} placeholder='height' /> <br />
                <p>{errors.height}</p>
                <label>Weight:</label>
                <input type='number' name='weight' value={newPokemon.weight} onChange={handleChange} placeholder='weight' /> <br />
                <p>{errors.weight}</p>
                <label>
                    Types:
                    <select onChange={handleChange} name='types'>
                        {allTypes.map((type) => (
                            <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                </label>
                {newPokemon.typeIds.length !== 0 && newPokemon.typeIds.map((typeId, i) => {
                    const type = allTypes.find((t) => t.id === typeId);
                    return (
                        <button type='button' key={i} name='types' value={type.id} onClick={handleChange}>
                            {type && type.name}
                        </button>
                    );
                })}
                <p>{errors.typeIds}</p>

                <button type='submit' disabled={!send}>Create</button>
            </form>
        </div>
    );
};

export default Form;