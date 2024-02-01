import React,{useState} from 'react';
import {Link,Outlet} from "react-router-dom";
export default function Navbar(){
  
return(
  <div>
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
  <a className="navbar-brand display-5 text-center" >Navbar</a>
  <button className="navbar-toggler" style={{backgroundColor:"black"}} type="button" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" >
    <span className="navbar-toggler-icon" style={{color:"white"}}></span>
   
  </button>

    <div className="collapse navbar-collapse" 
id="navbarSupportedContent"
  
    >
      <ul className="navbar-nav mr-auto ml-auto text-center">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/register">User SignIn</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>    
      </ul>   
      </div>
      </div>
  </nav>
  <Outlet/>
  </div>
    
)
}