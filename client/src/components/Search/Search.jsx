import { useState } from 'react';
import styles from './Search.module.css';
import { useDispatch } from 'react-redux';
import { getPokemonByName, setShowMsg } from '../../redux/actions';
import { BiSearchAlt } from 'react-icons/bi';
import { validateSearch } from '../../utils/validate';

const Search = () => {
   const [name, setName] = useState('');
   const dispatch = useDispatch();
   const handleClick = () => {
      let error = validateSearch(name);
      if (error.length) {
         dispatch((setShowMsg({ show: true, type: 'message', msg: error })));
      } else {
         dispatch(getPokemonByName(name));
      }
      setName('');
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