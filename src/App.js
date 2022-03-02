import './App.css';
import LoginPage from './pages/LoginPage';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import SignupPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<LoginPage/>}></Route>
            <Route path='/signup' element={<SignupPage/>}></Route>
            <Route path='/home' element={<LandingPage/>}></Route>
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
