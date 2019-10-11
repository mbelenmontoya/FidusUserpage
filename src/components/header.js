import React, { useState } from 'react'
import { Link } from "react-router-dom"

//images
import logo from '../images/logos/horizontal@2x.png'

const menuListItems = [
    { name: 'Fidus Club', href: '/fidusclub' },
    { name: 'Fidus Universitarios', href: '/fidusuniversitarios' },
];

const HeaderTop = props => {
  const [searchValue, setSearchValue] = useState('');
  const searchRewards = (event) => {
      event.preventDefault();
      props.history.push(`/search/${searchValue}`);
  };
  return(
    <div className="header-top">
        <figure className="header-logo-container">
            <Link to='/'><img src={logo} alt="Logo" className="header-logo" /></Link>
        </figure>
        <div className="header-search-container">
          <i className="header-search-icon"></i>
          <form onSubmit={searchRewards}>
            <input
              type="text"
              placeholder="Buscá tu beneficio"
              className="header-search"
              value={searchValue}
              onChange={event => setSearchValue(event.target.value)}
              />
          </form>
        </div>
    </div>
  );
};

const HeaderNav = () => {
  return(
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
  )
};

const Header = props => {
  return (
    <header className="header">
      <HeaderTop history={props.history} />
      <HeaderNav />
    </header>
)};

export default Header;
