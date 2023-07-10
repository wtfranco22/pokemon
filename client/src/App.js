import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Landing, Home } from './pages';
import { useEffect } from 'react';
import './App.css';
import { loadingPokemons, setAccess } from './redux/actions';
import { Header } from './components';

const App = () => {
  const { access } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const start = (bool) => {
    dispatch(setAccess(bool));
    navigate('/Home');
  };
  useEffect(() => {
    dispatch(loadingPokemons());
    !access && navigate('/');
  }, []);
  return (
    <>
      {access && <Header />}
      <Routes>
        <Route path='/' element={<Landing start={start} />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
