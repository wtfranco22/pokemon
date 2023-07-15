import { useDispatch, useSelector } from 'react-redux';
import { Cards } from '../../components';
import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import { setIndexPage, setStoragePokemons, setTypesPokemons } from '../../redux/actions';

const Home = () => {
    const updatedShowPokemons = useSelector((state) => state.updatedShowPokemons);
    const indexPage = useSelector((state) => state.indexPage);
    const quantityPages = useSelector((state) => state.quantityPages);
    const allTypes = useSelector((state) => state.allTypes);
    const filterByType = useSelector((state) => state.filterByType);
    const filterByStorage = useSelector((state) => state.filterByStorage);
    const [showPokemons, setShowPokemons] = useState([]);
    const dispatch = useDispatch();
    const handleClick = (event) => {
        let index = (event.target.value === '+') ? (indexPage - 1) : (indexPage + 1);
        dispatch(setIndexPage(index));
    };
    const handleChangeStorage = (event) => {
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
            <div>
                <input type="radio" value="bd" name="storage" checked={filterByStorage === 'bd'} onChange={handleChangeStorage} /> DB
                <input type="radio" value="api" name="storage" checked={filterByStorage === 'api'} onChange={handleChangeStorage} /> API
                <input type="radio" value="all" name="storage" checked={filterByStorage === 'all'} onChange={handleChangeStorage} /> API & BD
            </div>
            <select value={filterByType} onChange={handleChangeType} >
                <option value={'all'}>All types</option>
                {allTypes?.map((type) => {
                    return (<option key={type.id} value={type.name}>{type.name}</option>);
                })}
            </select>
            <div>
                <button onClick={handleClick} value={'+'} disabled={indexPage === 1}>
                    Anterior
                </button>
                <span>{indexPage} / {quantityPages || 1}</span>
                <button onClick={handleClick} value={'-'} disabled={indexPage >= quantityPages}>Siguiente</button>
            </div>
            <Cards pokemons={showPokemons} />
            <div>
                <button onClick={handleClick} value={'+'} disabled={indexPage === 1}>
                    Anterior
                </button>
                <span>{indexPage} / {quantityPages || 1}</span>
                <button onClick={handleClick} value={'-'} disabled={indexPage >= quantityPages}>Siguiente</button>
            </div>
        </div>
    );
};
export default Home;