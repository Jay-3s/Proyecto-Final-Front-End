import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import llamados from '../services/llamados'
import '../styles/FormRegister.css'

function FormRegister() {

  const [nombreUsuario,SetNombreUsuario]=useState()
  const [passwordUsuario,SetPasswordUsuario]=useState()
      

  function nombre(evento) {
    
    SetNombreUsuario(evento.target.value)
        
  }
    
  
    
  function password(evento) {
    
    SetPasswordUsuario(evento.target.value)
        
  }

  //Postea usuarios en el db.json del tipo usuario
  
  function Registrar() {
    
    llamados.PostUsers(nombreUsuario,passwordUsuario,"User")
    
  }



  return (
    <div className='elva'>

      <div className='register'>

         <h1>Registrarse</h1><br /><br />
         <label >Nombre</label>
         <input value={nombreUsuario} onChange={nombre}  type="text" />
         <br /><br />
         <label >Password</label>
         <input value={passwordUsuario} onChange={password} type="text" /><br />
         <p>¿Ya Tienes Una Cuenta?<Link to="/Login">Accede Aquí</Link></p><br />
         <button onClick={Registrar} className='registrar'>Registrarse</button>

      </div>

    </div>
  )
}

export default FormRegister