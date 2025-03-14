import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import llamados from '../services/llamados'

function FormRegister() {

      const [nombreUsuario,SetNombreUsuario]=useState()
      const [passwordUsuario,SetPasswordUsuario]=useState()

    function nombre(evento) {
    
         SetNombreUsuario(evento.target.value)
        
    }
    
  
    
    function password(evento) {
    
        SetPasswordUsuario(evento.target.value)
        
    }
    
      
    function Registrar() {
    
        llamados.PostUsers(nombreUsuario,passwordUsuario)
    
    }



  return (
    <div>
        <label >Nombre</label>
        <input value={nombreUsuario} onChange={nombre}  type="text" />
        <br />
        <label >Password</label>
        <input value={passwordUsuario} onChange={password} type="text" />
        <p>¿Ya Tienes Una Cuenta?<Link to="/Login">Accede Aquí</Link></p><br />
        <button onClick={Registrar}>Registrarse</button>
        

    </div>
  )
}

export default FormRegister