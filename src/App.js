import './App.css';
import LoginPage from './pages/LoginPage';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import SignupPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage';
import ContactusPage from './pages/ContactusPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/home' element={<LandingPage/>}>
                <Route path='contactus' element={<ContactusPage/>}/>
            </Route>
            
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
