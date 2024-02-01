import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import App from './App';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <React.Fragment>
        <Router>
          <Routes>
            <Route path="/">
              <Route index element={<Navbar/>}/>
              <Route path="register" element={<Register/>}/>
            </Route>
          </Routes>
          <App />
        </Router>
        
     </React.Fragment>
  
  </StrictMode>
);
