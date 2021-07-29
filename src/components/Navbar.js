import React from "react";
import '../style/navbar.css';
import '../App.css';
import img1 from "../assets/Ashton2.jpeg"



const NavBar = () =>{
    return (
    <nav>
         <img src= {img1} alt=" ashton standing beside a g-wagon"/>
        
        <ul>
            <li> <a href="#write-up" >About Me</a></li>
            <li> <a href="#sample">Work Samples</a></li>
            <li> <a href="#numbers">Contact Information</a></li>
        </ul>
    </nav>      
  
  )
}

export default NavBar;
  

