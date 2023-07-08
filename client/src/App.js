import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LandingPage, HomePage } from './pages';
import { useEffect } from 'react';
import './App.css';
import { setAccess } from './redux/actions';

function App() {
  const { access } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const start = (bool) => dispatch(setAccess(bool));
  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);
  return (
    <Routes>
      <Route path='/' element={<LandingPage start={start} />} />
      <Route path='/Home' element={<HomePage />} />
    </Routes>
  );
}

export default App;
