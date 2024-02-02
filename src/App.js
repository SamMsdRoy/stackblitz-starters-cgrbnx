import React,{useState,useEffect} from 'react';
import './style.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import axios from "axios";


export default function App() {
 
useEffect(()=>{
  const getDate=()=>{
    axios.get("/").then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
  }
  return()=>{
    getDate()
  }
})

  return (
    <div>
     
     
    </div>
  );
}
