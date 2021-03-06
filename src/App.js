import './App.css';
import LoginPage from './pages/LoginPage';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import SignupPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage';
import ContactusPage from './pages/ContactusPage';
import AboutPage from './pages/AboutPage';
import MyInfo from './pages/MyInfo';
import ServicesPage from './pages/ServicesPage';
import SliderLanding from './pages/SliderLanding';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>

            {/* Nested Routes: when the user is logged in  */}
            <Route path='/home' element={<LandingPage/>}>
                <Route path='slider' element={<SliderLanding/>}/> 
                <Route path='contactus' element={<ContactusPage/>}/>
                <Route path='about-us' element={<AboutPage/>}/>
                <Route path='user-info' element={<MyInfo/>}/>
                <Route path='services' element={<ServicesPage/>}/>
                
            </Route>
            
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
