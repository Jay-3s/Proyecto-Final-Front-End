import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Principal from '../pages/Principal';
import Main from '../pages/Main';
import Admin from '../pages/Admin';
import AcercaDe from '../pages/AcercaDe';


function Routing() {


  return (
    <div>
      <Router>
        <Routes>
      
                        

                           <Route path="/Login" element={<Login/>}/>
                           <Route path="/Register" element={<Register/>}/>
                           <Route path="/Principal" element={<Principal/>}/>
                           <Route path="/" element={<Main/>}/>
                           <Route path='/Admin' element={<Admin/>}></Route>
                           <Route path='/Acerca De' element={<AcercaDe/>}></Route>
          

                      
                            
        </Routes>
      </Router>
    </div>
  );
}


export default Routing