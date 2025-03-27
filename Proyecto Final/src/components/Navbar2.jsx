import React from 'react'
import "../styles/Navbar2.css";
import logo from "../img/logo.png"
import { Link } from 'react-router-dom'


function Navbar2() {
  return (
    <div className='UwU'>
       <nav className='UnNav'>
        <div className='Logo'>
            <Link to='/' className='Link'><img src={logo} alt="logogo" className='logo'/></Link>
        </div>
        
        <div className='Links'>
            <a href="/Acerca De">Acerca De Nosotros</a>
            <a href="">Ayuda</a>
            <a href="">Donativos</a>
            <a href="">Más Sobre La Marca</a>
            <a href="/Desarrolladores">Desarrolladores</a>
        </div>
        <div className='btns'>
            <button className='s' ><Link to='/Login' className='Link'>Iniciar Sesión</Link></button>
            <button className='r'><Link to='/Register' className='Link'>Registrarse</Link></button>
        </div>

       </nav>
    </div>
  )
}

export default Navbar2