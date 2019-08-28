import React from 'react'

import imagenbanner from '../images/assets/imagenbanner.png'

const BannerBusiness = () =>{
  return (
    <div className="banner-business">
      <figure className="banner-imagecontainer">
        <img src={imagenbanner} alt="imagen de banner" className="banner-image" />
      </figure>
      <div className="banner-contentcontainer">
        <h2 className="banner-title">¿Tenés un negocio?<br />Contactate con<br /> nosotros</h2>
        <a href="#" className="banner-button">Contactar</a>
      </div>
    </div>
  );
}


export default BannerBusiness