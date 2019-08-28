import React from 'react'

//images
import logo from '../images/logos/horizontal@2x.png'

const menuListItems = [
    { name: 'Fidus Club', href: '#' },
    { name: 'Fidus Empresas', href: '#' },
    { name: 'Fidus Universitarios', href: '#' },
];

const HeaderTop = () => {
  return(
    <div className="header-top">
        <figure className="header-logo-container">
          <img src={logo} alt="Logo" className="header-logo" />
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
    <nav className="header-nav-container">
        <ul className="header-nav">
        { menuListItems.map(({ name, href }) => (
            <li key={name} className="header-list-item">
                <a href={href} className="header-link-item">{name}</a>
            </li>
        )) }
        </ul>
        <span className="header-business-button">
          <a href="#" className="header-button">Negocios</a>
        </span>
      </nav>
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