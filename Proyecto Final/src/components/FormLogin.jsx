import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import llamados from '../services/llamados';
import '../styles/FormLogin.css'

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

  //Al dar click valida a través de una constante creada dentro de la función, 
  // busca al usuario que sea admin y lo envia a su respectiva página lo añade al local storage como admin 
  //Si no es posible validar estos datos de administrador redirige la página de clientes regulares con el navigate

  function validar() {

   const encontrado = usuarios.find(usuario => usuario.nombre === nombreUsuario && usuario.password === passwordUsuario);

   if (!encontrado) {
  
   console.log("Usuario o contraseña incorrectos");

  } else {
    localStorage.setItem("usuario",JSON.stringify(encontrado.Rol));

  if (encontrado.Rol === 'Admin') {
  
    navigate('/Admin');  
  } else {
    
    navigate('/Principal'); 

  }
}
 
   
  }

  return (

    //Formulario para el inicio de sesión

    <div className='fiv'>

    <div className='login'>
       <h1>Iniciar Sesión</h1><br /><br />
      <label htmlFor="">Nombre</label>
      <input value={nombreUsuario} onChange={nombre} type="text" /><br /><br />
      <label htmlFor="">Contraseña</label>
      <input value={passwordUsuario} onChange={password} type="text" /><br />
      <p>¿No tienes cuenta? <Link to="/Register">Regístrate aquí</Link></p><br />
      <button onClick={validar} className='iniciar'>Iniciar</button>
    </div>
    </div>
  )
}

export default FormLogin