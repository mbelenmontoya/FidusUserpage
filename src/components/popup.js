import React, { Component } from 'react'

import fidusDog from '../images/assets/fidus-dog-popup.png'

class Popup extends Component {
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
            <div className="popup-buttons-container">
              <a href="https://itunes.apple.com/us/app/fidus/id1459950785?l=es&ls=1&mt=8" className="google-button"></a>
              <a href="https://play.google.com/store/apps/details?id=com.fidus.fidusapp" className="apple-button"></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup
