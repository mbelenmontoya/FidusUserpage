import React, { Component } from 'react'

import fidusDog from '../images/assets/fidus-dog-popup.png'

class Popup extends Component{
  render(){
    return(
      <div className="popup">
        <div className="inner-popup">
          <button onClick={this.props.closePopup} className="popup-close">X</button>  
          <figure className="popup-containerimage">
            <img src={fidusDog} alt="fidus dog" className="popup-image" />
          </figure>
          <div className="popup-containettext">
            <h1 className="popup-title">Bajate nuestra app para reservar tu premio y encontrar muchos beneficios más</h1>
            <button type="button" className="google-button"></button>
            <button type="button" className="apple-button"></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup