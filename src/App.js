import './App.css';
import LoginPage from './pages/LoginPage';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<LoginPage/>}></Route>
            <Route path='/signup' element={<SignupPage/>}></Route>

            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
