import React from 'react'

//images
import boximage from '../images/assets/newsimage.jpg'
import logoimage from '../images/assets/logonews.png'

const NewsTitle = () => {
  return (
    <h2 className="section-title">Novedades</h2>
  );
}

const NewsBodyImage = () => {
  return (
    <div className="news-generalcontainer">
        <div className="news-contentbox">
          <div className="ribbon">
            <span className="ribbon-text">NUEVO</span>
          </div>
          <div className="news-logocontainer">
            <img src={logoimage} alt="logo de la novedad" className="news-logo" />
          </div>
          <h4 className="news-name">nombre del beneficio</h4>
          <h3 className="news-benefit">descuento</h3>
        </div>
        <figure className="news-imagecontainer">
          <img src={boximage} alt="" className="news-image" />
        </figure>
    </div>
  );
}

const NewsBody = () => {
  return (
    <div className="news-container">
      <span className="box-title">Nuevos beneficios todas las semanas</span>
      <a href="#" className="action-button">Ver más</a>
    </div>
  );
}

const News = () => {
  return(
    <div className="news">
      <NewsTitle />
      <div className="news-boxcontainer">
        <NewsBodyImage />
        <NewsBody />
      </div>
    </div>
  );
}

export default News;