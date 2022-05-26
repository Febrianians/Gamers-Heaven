import {
  LandingPage,
  RegisterPage,
  LoginPage,
  GameForm,
  GameList,
  GameRPSPage
} from "./pages/index";
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/gamerps' element={<GameRPSPage />} />
        <Route exact path="/games" element={<GameList />} />
        <Route exact path="/games/add" element={<GameForm />} />
      </Routes>
    </>
  );
}

export default App;
