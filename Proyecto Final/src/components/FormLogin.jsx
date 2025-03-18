import React, { useState,useEffect } from 'react'

import { Link, useNavigate } from "react-router-dom";

import llamados from '../services/llamados';

function FormLogin() {

  const [nombreUsuario,SetNombreUsuario]=useState()
  const [passwordUsuario,SetPasswordUsuario]=useState()
  const [usuarios,SetUsuarios]=useState()
  const [RolUsuario,SetRolUsuario]=useState()


  const navigate = useNavigate()

     useEffect(() => {
   
       async function fetchDataUsers() {
   
     
         const datos = await llamados.GetUsers()
         
         SetUsuarios(datos)
         
    
        };
   
       fetchDataUsers();
   
   
     }, []); 




  function nombre(evento) {

    SetNombreUsuario(evento.target.value)
    
  }

  function password(evento) {

    SetPasswordUsuario(evento.target.value)
    
  }

  function Rol(evento) {

    SetRolUsuario(evento.target.value)
    
  }

  function validar() {

   const encontrado = usuarios.find(usuario => usuario.nombre === nombreUsuario && usuario.password === passwordUsuario);

   if (!encontrado) {
  
   console.log("Usuario o contraseña incorrectos");

  } else {
  
  if (encontrado.Rol === 'Admin') {
  
    navigate('/Admin');  
  } else {
    
    navigate('/Principal'); 

  }
}
 
   
  }

  return (
    <div>

      <label htmlFor="">Nombre</label>
      <input value={nombreUsuario} onChange={nombre} type="text" />
      <label htmlFor="">Contraseña</label>
      <input value={passwordUsuario} onChange={password} type="text" />
      <p>¿No tienes cuenta? <Link to="/Register">Regístrate aquí</Link></p>
      <button onClick={validar}>Iniciar</button>
    </div>
  )
}

export default FormLogin