import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <div className="container d-flex align-items-center flex-column">
      <RegisterPage/>
       </div>
      
    </div>
  );
}

export default App;
