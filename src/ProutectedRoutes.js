import React from 'react';
import LoginPage from './pages/LoginPage';
import {Outlet} from 'react-router-dom';
import { Navigate } from "react-router-dom";


const useAuth = () => {
    const user = {loggedIn: false}
    if(localStorage.getItem('access_token') != null){
       user = {loggedIn: true};
    }else{

    }
    
    return user && user.loggedIn;
}
const ProutectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Navigate to="\"/>
};

export default ProutectedRoutes;