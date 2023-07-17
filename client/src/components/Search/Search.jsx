import { useState } from 'react';
import styles from './Search.module.css';
import { useDispatch } from 'react-redux';
import { getPokemonByName } from '../../redux/actions';
import { BiSearchAlt } from 'react-icons/bi';

const Search = () => {
   const [name, setName] = useState('');
   const dispatch = useDispatch();
   const handleClick = () => {
      dispatch(getPokemonByName(name));
   };
   const handleInput = (event) => {
      setName(event.target.value);
   };
   return (
      <div className={styles.container}>
         <input className={styles.input} type='search' value={name} onInput={handleInput} placeholder='Search . . . ' />
         <button onClick={handleClick} className={styles.btn}><BiSearchAlt /></button>
      </div>
   );
}
export default Search;