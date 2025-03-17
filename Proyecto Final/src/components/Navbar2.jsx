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
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
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