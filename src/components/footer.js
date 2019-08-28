import React from 'react'

import fidusapp from '../images/assets/fidusapp.png'
import logovertical from '../images/logos/vertical@2x.png'

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer-textcontainer">
        <figure className="footer-logocontainer">
          <img src={logovertical} alt="" className="footer-logo" />
        </figure>
        <ul className="footer-listlinks">
          <li className="footer-item"><a href="#" className="footer-link">Preguntas Frecuentes</a></li>
          <li className="footer-item"><a href="#" className="footer-link">Contacto</a></li>
          <li className="footer-item">
            <a href="#" className="footer-link">Facebook</a> 
            <a href="#" className="footer-link">Instagram</a> 
            <a href="#" className="footer-link">Twitter</a>
          </li>
        </ul>
      </div>
      <div className="footer-fidusapp">
        <figure className="footer-fiduscontainer">
          <img src={fidusapp} alt="" className="footer-fidusimage" />
        </figure>
        <span className="fidus-copyright">c Derechos de autor 2019 Fidus. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer