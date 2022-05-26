import { LandingPage, RegisterPage, LoginPage, GameRPSPage } from './pages';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/gamerps' element={<GameRPSPage />} />
      </Routes>
    </>
  );
}

export default App;
