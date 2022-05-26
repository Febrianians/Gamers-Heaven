import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage } from "./Pages";
import {
  LandingPage,
  RegisterPage,
  LoginPage,
  ProfilePage,
  GameForm,
  GameList,
  GameRPSPage,
} from "./pages/index";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/user" element={<ProfilePage />} />
        <Route exact path="/gamerps" element={<GameRPSPage />} />
        <Route exact path="/games" element={<GameList />} />
        <Route exact path="/games/add" element={<GameForm />} />
      </Routes>
    </>
  );
}

export default App;
