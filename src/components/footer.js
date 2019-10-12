import React from 'react'
import { Link } from "react-router-dom"

import fidusapp from '../images/assets/fidusapp.png'
import logovertical from '../images/logos/vertical@2x.png'
import fbimage from '../images/assets/fb@2x.png'
import igimage from '../images/assets/ig@2x.png'
import lkimage from '../images/assets/lk@2x.png'

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer-textcontainer">
        <figure className="footer-logocontainer">
          <img src={logovertical} alt="" className="footer-logo" />
        </figure>
        <ul className="footer-listlinks">
          <li className="footer-item">
              <Link to='/faqs' className="footer-link">Preguntas Frecuentes</Link>
          </li>
          <li className="footer-item">
              <Link to='/contact' className="footer-link">Contacto</Link>
          </li>
          <li className="footer-item -max-width">
            <a href="https://www.facebook.com/fiduspremios" target="_blank" className="footer-link" rel="noopener noreferrer">
              <img src={fbimage} alt="facebook logo" className="footer-image" />
            </a>
            <a href="https://www.instagram.com/fiduspremios/" className="footer-link" target="_blank" rel="noopener noreferrer">
              <img src={igimage} alt="instagram logo" className="footer-image" />
            </a>
            <a href="https://www.linkedin.com/company/fidus-sum%C3%A1-puntos-gan%C3%A1-premios/" className="footer-link"  target="_blank" rel="noopener noreferrer">
              <img src={lkimage} alt="linkedin logo" className="footer-image" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-fidusapp">
        <figure className="footer-fiduscontainer">
          <Link to='/'><img src={fidusapp} alt="" className="footer-fidusimage" /></Link>
          <figcaption>
            <span className="fidus-copyright">© Derechos de autor 2019 Fidus. Todos los derechos reservados.</span>
          </figcaption>
        </figure>
      </div>
    </footer>
  );
}

export default Footer
