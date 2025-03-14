import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Principal from '../pages/Principal';
import Main from '../pages/Main';


function Routing() {


  return (
    <div>
      <Router>
        <Routes>
      
                        

                           <Route path="/Login" element={<Login/>}/>
                           <Route path="/Register" element={<Register/>}/>
                           <Route path="/Principal" element={<Principal/>}/>
                           <Route path="/" element={<Main/>}/>
          

                      
                            
        </Routes>
      </Router>
    </div>
  );
}


export default Routing