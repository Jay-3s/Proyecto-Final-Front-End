import React from 'react'
import "../styles/Navbar2.css";
import logo from "../img/logo.png"
import { Link,useNavigate } from 'react-router-dom'


function NavbarAdmin() {

  const navigate = useNavigate()

  function cerrar() {
    localStorage.removeItem("usuario");
    navigate('/')
  }
  return (
    <div className='UwU'>
       <nav className='UnNav'>
        <div className='Logo'>
            <Link to='/' className='Link'><img src={logo} alt="logogo" className='logo'/></Link>
        </div>
        
        <div className='Links'>
            <a href="/Acerca De">Acerca De Nosotros</a>
            <a href="">Ayuda</a>
            <a href="/Donativos">Donativos</a>
            <a href="">Más Sobre La Marca</a>
            <a href="/Desarrolladores">Desarrolladores</a>
        </div>
        <div className='btns'>
            
            <button className='r'><p onClick={cerrar}  className='Link'>Cerrar Sesión</p></button>
        </div>

       </nav>
    </div>
  )
}

export default NavbarAdmin