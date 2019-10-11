import React from 'react'

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
  frase: 'todavia no la tengo'}
];

const Carousel = () => {

//carousel
var slideInterval = 4000;
function getFigures() {
  return document.getElementById('carousel').getElementsByTagName('div');
}

function moveForward() {
  if (document.getElementById('carousel') === null) {
    return;
  }
  var pointer = 0;
  var figures = getFigures();
  for (var i = 0; i < figures.length; i++) {
    if (figures[i].className === 'carousel-slide visible') {
      figures[i].className = 'carousel-slide hidden';
      pointer = i;
    }
  }
  if (++pointer === figures.length) {
    pointer = 0;
  }
  figures[pointer].className = 'carousel-slide visible';
  setTimeout(moveForward, slideInterval);
}

function startPlayback() {
 setTimeout(moveForward, slideInterval);
}

startPlayback();

  return(
    <div className="carousel" id="carousel">
      <ul className="carousel-list">
      { listImages.map((item, i) => (
        <li key={i} className="carousel-bullet"><span className="carousel-bullet-item"></span></li>
      )) }
      </ul>
    {listImages.map(({image, frase}, i) => (
      <div
        className={i === 0 ? 'carousel-slide visible' : 'carousel-slide hidden'}
        style={{backgroundImage:`url(${image})`}}
        key={i}>
        <h1 className="carousel-title">{frase}</h1>
        <a href="https://play.google.com/store/apps/details?id=com.fidus.fidusapp" className="google-button"></a>
        <a href="https://itunes.apple.com/us/app/fidus/id1459950785?l=es&ls=1&mt=8" className="apple-button"></a>
      </div>
    ))}
    </div>
  );
}




export default Carousel;
