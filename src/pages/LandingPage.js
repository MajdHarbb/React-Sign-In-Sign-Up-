import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import {Outlet} from 'react-router-dom';
import { useState } from 'react';

const LandingPage = () => {

    // Use State: get input values on change
    const [first_name,setFirstName] = useState('');
    const [last_name,setLastName] = useState('');
    const [email,setEmail] = useState('');

    //get token from local storage
    const bearer_token = localStorage.getItem("access_token");
    console.log(bearer_token)

    //fetch user-profile API: returns id,name, email
    var url = "http://127.0.0.1:8000/api/auth/user-profile";
    var bearer = 'Bearer ' + bearer_token;
    
    async function getUserInfo ()  {
        const response = await fetch(url, {
            method: 'GET',
    
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        })
        
        let content = await response.json();
        //set fetched first and last name values to variables
        setFirstName(content.first_name);
        setLastName(content.last_name);
        
    }
    //End fetch user-profile API

    getUserInfo();
    
    return (
        <div>
            <NavbarComponent/>
            
            <Outlet/>
              
        </div>
        
    );
};

export default LandingPage;