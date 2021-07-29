import React from 'react';
import NavBar from './Navbar';
import '../style/header.css'
import '../App.css';

const Header = () =>{
    return (
        <header class="header">
        <div class="head">
        <h1>Ashton Headley</h1>
        </div>
         <NavBar />
        </header>
        
    )
}

export default Header;