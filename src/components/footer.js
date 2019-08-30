import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

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
            <Router>
              <Link to='/faqs' className="footer-link">Preguntas Frecuentes</Link>
            </Router>
          </li>
          <li className="footer-item">
            <Router>
              <Link to='/contact' className="footer-link">Contacto</Link>
            </Router>
          </li>
          <li className="footer-item -max-width">
            <a href="#" className="footer-link"><img src={fbimage} alt="facebook logo"    className="footer-image" /></a> 
            <a href="#" className="footer-link"><img src={igimage} alt="facebook logo" className="footer-image" /></a> 
            <a href="#" className="footer-link"><img src={lkimage} alt="facebook logo" className="footer-image" /></a>
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