import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/Login">Iniciar Sesión</a></li>
        <li className="navbar-item"><a href="/about">Sobre nosotros</a></li>
        <li className="navbar-item"><a href="/services">Servicios</a></li>
        <li className="navbar-item"><a href="/contact">Contactos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
