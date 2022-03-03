import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import {Outlet} from 'react-router-dom';
import { useState } from 'react';
import SliderComponent from '../components/SliderComponent';

const LandingPage = () => {

    // constructor(props){
    //     super(props);
    //     this.state={
    //         name:"suraj"
    //     }
    // }

    const [first_name,setFirstName] = useState('');
    const [last_name,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const bearer_token = localStorage.getItem("access_token");
    console.log(bearer_token)
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
        console.log(content);
        setFirstName(content.first_name);
        setLastName(content.last_name);
        
    }
    
    getUserInfo();
    
    return (
        <div>
            <NavbarComponent/>
            <SliderComponent/>
            <Outlet/>
            
        </div>
    );
};

export default LandingPage;