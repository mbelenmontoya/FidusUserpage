import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"


//images
import logo from '../images/logos/horizontal@2x.png'

const menuListItems = [
    { name: 'Fidus Club', href: '/fidusclub' },
    { name: 'Fidus Empresas', href: '/fidusempresas' },
    { name: 'Fidus Universitarios', href: '/fidusuniversitarios' },
];

const HeaderTop = () => {
  return(
    <div className="header-top">
        <figure className="header-logo-container">
          <Router>
            <Link to='/'><img src={logo} alt="Logo" className="header-logo" /></Link>
          </Router>
        </figure>
        <div className="header-search-container">
          <i className="header-search-icon"></i>
          <input type="text" placeholder="Buscá tu beneficio" className="header-search" />
        </div>
    </div>
  );
}
  

const HeaderNav = () => {
  return(
    <Router>
      <nav className="header-nav-container">
        <ul className="header-nav">
        { menuListItems.map(({ name, href }) => (
            <li key={name} className="header-list-item">
                <Link to={href} className="header-link-item">{name}</Link>
            </li>
        )) }
        </ul>
        <span className="header-business-button">
          <a href="#" className="header-button">Negocios</a>
        </span>
      </nav>
    </Router>
  )
}

const Header = () => {
  return (
    <header className="header">
        <HeaderTop />
        <HeaderNav />
      </header>
)};

export default Header; 