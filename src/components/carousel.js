import React, { useState, useEffect, useCallback } from 'react'

//images
import bg1 from '../images/assets/bg1@2x.jpg'
import bg2 from '../images/assets/bg2@2x.jpg'
import bg3 from '../images/assets/bg3@2x.jpg'

const listImages = [
  {image : `${bg1}` ,
  frase: "Unite a Fidus hoy y \n accedé a beneficios infinitos" },
  {image: `${bg2}` ,
  frase: 'Encontrá tus beneficios con la App de Fidus' },
  {image: `${bg3}` ,
  frase: 'Todavia no la tenés?'}
];

const Carousel = () => {
  var slideInterval = 4000;

  const [activeImage, setActiveImage] = useState(0);

  const moveForward = () => {
    if (document.getElementById('carousel') === null) {
      return;
    }
    setActiveImage((activeImage + 1) % listImages.length);
  };

  setTimeout(moveForward, slideInterval)

  return(
    <div className="carousel" id="carousel">
      {listImages.map(({image, frase}, i) => (
        <div
          className={i === activeImage ? 'carousel-slide visible' : 'carousel-slide hidden'}
          style={{backgroundImage:`url(${image})`}}
          key={i}>
          <h1 className="carousel-title">{frase}</h1>
          <div className='carousel-buttons-container'>
            <a href="https://play.google.com/store/apps/details?id=com.fidus.fidusapp" className="google-button"></a>
            <a href="https://itunes.apple.com/us/app/fidus/id1459950785?l=es&ls=1&mt=8" className="apple-button"></a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
