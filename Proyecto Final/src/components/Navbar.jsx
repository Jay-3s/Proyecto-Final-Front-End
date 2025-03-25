import React from 'react';
import '../styles/Navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/Login">Iniciar Sesión</a></li>
        <li className="navbar-item"><a href="/Acerca De">Sobre nosotros</a></li>
        <li className="navbar-item"><a href="/services">Servicios</a></li>
        <li className="navbar-item"><a href="/contact">Contactos</a></li>
      </ul>

      <div>

        <div className='bt'>
            <button className='1'>Iniciar Sesión</button>
            <button className='2'>Registrarse</button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
