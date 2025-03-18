import React from 'react'
import "../styles/Navbar2.css";
import logo from "../img/logo.png"


function Navbar2() {
  return (
    <div>
       <nav className='UnNav'>
        <div className='Logo'>
            <img src={logo} alt="logogo" className='logo'/>
        </div>
        <div className='Links'>
            <a href="/Acerca De">Acerca De Nosotros</a>
            <a href="">Ayuda</a>
            <a href="">Donativos</a>
            <a href="">Más Sobre La Marca</a>
            <a href="">Desarrolladores</a>
        </div>
        <div className='btns'>
            <button className='s'>Iniciar Sesión</button>
            <button className='r'>Registrarse</button>
        </div>

       </nav>
    </div>
  )
}

export default Navbar2