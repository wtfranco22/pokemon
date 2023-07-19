import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Landing, Home, Detail, Create } from './pages';
import { useEffect } from 'react';
import './App.css';
import { loadingPokemons, loadingTypes, setAccess } from './redux/actions';
import { Header, ModalPokemon, Msg } from './components';

const App = () => {
  const access = useSelector((state) => state.access);
  const showModal = useSelector((state) => state.showModal);
  const showMsg = useSelector((state) => state.showMsg.show);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const start = (bool) => {
    dispatch(setAccess(bool));
    navigate('/Home');
  };
  useEffect(() => {
    dispatch(loadingPokemons());
    dispatch(loadingTypes());
    !access && navigate('/');
  }, []);
  return (
    <>
      {access && <Header />}
      {showModal && <ModalPokemon />}
      {showMsg && <Msg />}
      <Routes>
        <Route path='/' element={<Landing start={start} />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Details/:id' element={<Detail />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
