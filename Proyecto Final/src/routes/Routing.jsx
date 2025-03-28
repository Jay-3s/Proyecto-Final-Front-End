import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Principal from '../pages/Principal';
import Main from '../pages/Main';
import Admin from '../pages/Admin';
import AcercaDe from '../pages/AcercaDe';
import Pagos from '../pages/SoloPagos'
import MiCarrito from '../pages/MiCarrito';
import Desarrollador from '../pages/Desarrollador';
import Donativos from '../pages/Donativos';
import ProtectedRoutes from '../components/ProtectedRoutes';

function Routing() {


  return (
    <div>
      <Router>
        <Routes>
      
                           <Route path="/Login" element={<Login/>}/>
                           <Route path="/Register" element={<Register/>}/>
                           <Route path="/" element={<Main/>}/>
                           <Route path='/Acerca De' element={<AcercaDe/>}></Route>
                           <Route path='/Desarrolladores' element={<Desarrollador/>}></Route>
                           <Route path='/Donativos' element={<Donativos/>}></Route>


                           <Route element={<ProtectedRoutes  />}>

                           <Route path="/Principal" element={<Principal/>}/>
                           <Route path='/Pagar' element={<Pagos/>}></Route>
                           <Route path='/Carrito' element={<MiCarrito/>}></Route>

                           </Route>

                           

                           <Route element={<ProtectedRoutes isAdmin={true} />}> 
                           <Route path='/Admin' element={<Admin/>}></Route>
                           </Route>
                      
                            
        </Routes>
      </Router>
    </div>
  );
}


export default Routing