import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './Pages';
import { LandingPage, RegisterPage, LoginPage, ProfilePage } from './Pages/index';
// import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/user' element={<ProfilePage/>}/>
      </Routes>
    </>
  );
}

export default App;