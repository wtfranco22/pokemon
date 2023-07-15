import { useDispatch, useSelector } from 'react-redux';
import { Cards } from '../../components';
import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import { setIndexPage, setStoragePokemons, setTypesPokemons } from '../../redux/actions';

const Home = () => {
    const { updatedShowPokemons, indexPage, quantityPages, allTypes } = useSelector((state) => state);
    const [showPokemons, setShowPokemons] = useState([]);
    const [showStorage, setShowStorage] = useState('all');
    const dispatch = useDispatch();
    const handleClick = (event) => {
        let index = (event.target.value === '+') ? (indexPage - 1) : (indexPage + 1);
        dispatch(setIndexPage(index));
    };
    const handleChangeStorage = (event) => {
        setShowStorage(event.target.value);
        dispatch(setStoragePokemons(event.target.value));
    }
    const handleChangeType = (event) => {
        dispatch(setTypesPokemons(event.target.value));
    };
    useEffect(() => {
        setShowPokemons(updatedShowPokemons);
    }, [updatedShowPokemons]);
    return (
        <div className={styles.container}>
            <h1>Home</h1>
            <div onChange={handleChangeStorage}>
                <input type="radio" value="bd" name="storage" checked={showStorage === 'bd'} /> DB
                <input type="radio" value="api" name="storage" checked={showStorage === 'api'} /> API
                <input type="radio" value="all" name="storage" defaultChecked={showPokemons} checked={showStorage === 'all'} /> API & BD
            </div>
            <select onChange={handleChangeType} >
                <option value={'all'}>All types</option>
                {allTypes?.map((type) => {
                    return (<option key={type.id} value={type.name}>{type.name}</option>);
                })}
            </select>
            <div>
                <button onClick={handleClick} value={'+'} disabled={indexPage === 1}>
                    Anterior
                </button>
                <span>{indexPage} / {quantityPages}</span>
                <button onClick={handleClick} value={'-'} disabled={indexPage >= quantityPages}>Siguiente</button>
            </div>
            <Cards pokemons={showPokemons} />
            <div>
                <button onClick={handleClick} value={'+'} disabled={indexPage === 1}>
                    Anterior
                </button>
                <span>{indexPage} / {quantityPages}</span>
                <button onClick={handleClick} value={'-'} disabled={indexPage >= quantityPages}>Siguiente</button>
            </div>
        </div>
    );
};
export default Home;