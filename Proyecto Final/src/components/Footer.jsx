import React from "react";
import "../styles/Footer.css";

//Este es el pie de la página

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Desarrollador</h4>
        <p>Jostin G. Espinoza Sánchez ©</p>
        
      </div>
      <div className="footer-section1">
        <h4>Contacto</h4>

        <div className="footer-section2">
          <box-icon type='logo' name='instagram'></box-icon>
          <p>joztin.n</p>
        </div>

        <div>
          <box-icon name='facebook-circle' type='logo' ></box-icon>
          <p>Jostin Espinoza</p>
        </div>

        <div>
          <box-icon name='gmail' type='logo' ></box-icon>
          <a href="https://mail.google.com/mail/u/0/">josgaespinoza06@gmail.com</a>
        </div>

        <div>
          <box-icon name='phone'></box-icon>
          <p>+506 6412 9832</p>
        </div>

      </div>

      <div className="footer-section">

        <h4>Fundaciones</h4>

        <p>Fundación Paniamor©</p>

        <p>ALCCI Costa Rica©</p>

        <p>Teletón Costa Rica©</p>

        <p>Fundación Creciendo Juntos©</p>

      </div>

    </footer>
  );
};

export default Footer;
