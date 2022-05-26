import { LandingPage, RegisterPage, LoginPage, ProfilePage } from './Pages/index';
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
        <Route path='/user' element={<ProfilePage/>}/>
      </Routes>
    </>
  );
}

export default App;
