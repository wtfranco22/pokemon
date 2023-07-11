import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import validate from '../../utils/validate';
const Form = ({ addPokemon }) => {
    const [newPokemon, setNewPokemon] = useState(
        {
            name: '',
            image: '',
            hp: '0',
            attack: '0',
            defense: '0',
            speed: '0',
            height: '0',
            weight: '0',
            typeIds: []
        }
    );
    const [types, setTypes] = useState([]);
    const [errors, setErrors] = useState({
        name: '',
        image: '',
        hp: 1,
        attack: 1,
        defense: 1,
        speed: 1,
        height: 1,
        weight: 1
    });
    const [send, setSend] = useState(false);
    useEffect(() => {
        setSend((Object.getOwnPropertyNames(errors).length) === 0)
    }, [errors]);
    const handleInput = (event) => {
        setNewPokemon({
            ...newPokemon, [event.target.name]: event.target.value
        });
        setErrors(
            validate({
                ...newPokemon, [event.target.name]: event.target.value
            })
        );
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setNewPokemon({ ...newPokemon, typeIds: types });
        addPokemon(newPokemon);
    };
    const handleChange = (event) => {
        setTypes([...types, event.target.value]);
    };
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} autoComplete='off' >
                <label>Name:</label>
                <input type='text' name='name' value={newPokemon.name} onInput={handleInput} placeholder='Name' /> <br />
                <p>{errors.name}</p>
                <label>Image:</label>
                <input type='text' name='image' value={newPokemon.image} onInput={handleInput} placeholder='Image' /> <br />
                <p>{errors.image}</p>
                <label>Hp:</label>
                <input type='text' name='hp' value={newPokemon.hp} onInput={handleInput} placeholder='life' /> <br />
                <p>{errors.hp}</p>
                <label>Attack:</label>
                <input type='text' name='attack' value={newPokemon.attack} onInput={handleInput} placeholder='attack' /> <br />
                <p>{errors.attack}</p>
                <label>Defense:</label>
                <input type='text' name='defense' value={newPokemon.defense} onInput={handleInput} placeholder='defense' /> <br />
                <p>{errors.defense}</p>
                <label>Speed:</label>
                <input type='text' name='speed' value={newPokemon.speed} onInput={handleInput} placeholder='speed' /> <br />
                <p>{errors.speed}</p>
                <label>Height:</label>
                <input type='text' name='height' value={newPokemon.height} onInput={handleInput} placeholder='height' /> <br />
                <p>{errors.height}</p>
                <label>Weight:</label>
                <input type='text' name='weight' value={newPokemon.weight} onInput={handleInput} placeholder='weight' /> <br />
                <p>{errors.weight}</p>
                <label>
                    Types:
                    <select onChange={handleChange}>
                        <option></option>
                        <option value="1">normal</option>
                        <option value="2">fighting</option>
                        <option value="3">flying</option>
                    </select>
                </label>
                <button type='submit' disabled={!send}>Create</button>
            </form>
        </div>
    );
};

export default Form;