import { useDispatch, useSelector } from 'react-redux';
import { Cards } from '../../components';
import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import { setIndexPage, setOrderPokemons, setStoragePokemons, setTypesPokemons } from '../../redux/actions';
import { NavLink } from 'react-router-dom';
import { TiUserAdd } from 'react-icons/ti';

const Home = () => {
    const updatedShowPokemons = useSelector((state) => state.updatedShowPokemons);
    const indexPage = useSelector((state) => state.indexPage);
    const quantityPages = useSelector((state) => state.quantityPages);
    const allTypes = useSelector((state) => state.allTypes);
    const filterByType = useSelector((state) => state.filterByType);
    const filterByStorage = useSelector((state) => state.filterByStorage);
    const filterByOrder = useSelector((state)=>state.filterByOrder);
    const orders = ['A-Z', 'Z-A', 'ATTACK_ASC', 'ATTACK_DESC'];

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
    const handleChangeOrder = (event) => {
        dispatch(setOrderPokemons(event.target.value));
    }
    useEffect(() => {
        setShowPokemons(updatedShowPokemons);
    }, [updatedShowPokemons]);
    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <span className={styles.header_title}>Home</span>
                <NavLink to={'/create'} className={styles.create}>
                    <span className={styles.createText}>New </span>
                    <span className={styles.icon}><TiUserAdd /></span>
                </NavLink>
            </div>

            <div className={styles.filters}>
                <div>
                    <h3>ORDER</h3>
                    <select className={styles.order} value={filterByOrder} onChange={handleChangeOrder}>
                        <option value="default" >Default</option>
                        {orders.map((order, i) =>
                            (<option key={i} value={order}>{order}</option>)
                        )}
                    </select>
                </div>
                <div>
                    <h3>TYPES</h3>
                    <select value={filterByType} onChange={handleChangeType} className={styles.types}>
                        <option value={'all'}>All types</option>
                        {allTypes?.map((type) =>
                            (<option key={type.id} value={type.name}>{type.name}</option>)
                        )}
                    </select>
                </div>

                <div className={styles.storage}>
                    <h3>STORAGE</h3>
                    <div className={styles.storage_choice}>
                        <input type="radio" value="all" name="storage" checked={filterByStorage === 'all'} onChange={handleChangeStorage} />API & BD
                    </div>
                    <div className={styles.storage_choice}>
                        <input type="radio" value="api" name="storage" checked={filterByStorage === 'api'} onChange={handleChangeStorage} />POKE API
                    </div>
                    <div className={styles.storage_choice}>
                        <input type="radio" value="bd" name="storage" checked={filterByStorage === 'bd'} onChange={handleChangeStorage} />DATABASE
                    </div>
                </div>
            </div>

            <div className={styles.paginate}>
                <button onClick={handleClick} value={'+'} disabled={indexPage === 1}>
                    Previus
                </button>
                <span>Page {indexPage} of {quantityPages || 1}</span>
                <button onClick={handleClick} value={'-'} disabled={indexPage >= quantityPages}>Next</button>
            </div>

            <Cards pokemons={showPokemons} />
        </div>
    );
};
export default Home;