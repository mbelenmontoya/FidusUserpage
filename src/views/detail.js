import React, { Component } from 'react'
import axios from 'axios'


import Popup from '../components/popup'

import imgenLogo from '../images/assets/logobox.jpg'

const DetailTitle = () => {
  return (<h2 className="section-title">Beneficios Gastronomia</h2>);
}

const DetailMap = () => {
  return (
    <div className="detail-map">
      MAPA
    </div>
  );
}

class DetailInfo extends Component {
  constructor(props){  
    super(props);  
    this.state = { showPopup: false };  
  }

  togglePopup() {  
    this.setState({  
        showPopup: !this.state.showPopup  
    });  
 }    
  render(){
  return(
    <div className="detail-info">
      <div className="detail-benefitinfo">
        <figure className="detail-logocontainer">
          <img src={imgenLogo} alt="imagen beneficio" className="detail-logo" />
        </figure>
        <div className="detail-textcontainer">
          <h5 className="detail-title">Franks Hot Dog & Salds</h5>
          <div className="detail-contact">
            <span className="title-icon">web</span>
            <span className="title-icon">phone</span>
            <span className="title-icon">instagram</span>
            <span className="title-icon">facebook</span>
          </div>
        </div>
      </div>
      <h4 className="detail-benefit">¡Tenés un 50% de descuento!</h4>
      <p className="detail-conditions">Una vez reservado el premio, tenés 24hs para ir hasta el local y reclamarlo</p>
      <button onClick={this.togglePopup.bind(this)} className="detail-button">Obtener beneficio</button>
      <a className="detail-termscondicions">Términos y condiciones</a>
      {this.state.showPopup ?  
      <Popup closePopup={this.togglePopup.bind(this)} />  
      : null  
      }  
    </div>
  );
  }
}

class DetailBox extends Component{
   constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

 componentDidMount(){
   axios.get(`https://stage.fidus.com.ar/api/v1/landing/featured_mobile_rewards`)
   .then(res => {
     const list = res.data.rewards;
     this.setState({ list });
   })
 }


  render(){
    return(
      <div className="detail">
      <DetailTitle />
        <div className="detail-box">
          <DetailMap />
          <DetailInfo  />
        </div>
      </div>
    );
  }
}



export default DetailBox