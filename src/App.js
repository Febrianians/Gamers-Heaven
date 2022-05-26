import {
  LandingPage,
  RegisterPage,
  LoginPage,
  GameForm,
  GameList,
} from "./pages/index";
// import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/games" element={<GameList />} />
        <Route exact path="/games/add" element={<GameForm />} />
      </Routes>
    </>
  );
}

export default App;
