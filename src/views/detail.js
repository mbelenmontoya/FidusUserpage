import React, { Component } from 'react'
import axios from 'axios'


import Popup from '../components/popup'
import Map from '../components/mapcontainer'

//images
import webimg from '../images/assets/weburl.png'
import phoneimg from '../images/assets/phone.png'
import igimg from '../images/assets/iglogo.png'
import fbimg from '../images/assets/fblogo.png'

const DetailTitle = () => {
  return (<h2 className="section-title">Beneficios Gastronomia</h2>);
}

const DetailMap = props => {
const {lat, lng} = props
  return (
    <div className="detail-map">
      <Map />
    </div>
  );
}

class DetailInfo extends Component {
  constructor(props){  
    super(props);  
    this.state = { 
      showPopup: false
     };  
  }

  togglePopup() {  
    this.setState({  
        showPopup: !this.state.showPopup  
    });  
 }

  render(){
    const {logo} = this.props.logo
    const {name } = this.props.name
    const {weburl} = this.props.weburl
    const {phone} = this.props.phone
    const {igurl} = this.props.igurl
    const {fburl} = this.props.fburl
    const {discount} = this.props.discount
    const {condition} = this.props.condition
  return(
    <div className="detail-info">
      <div className="detail-benefitinfo">
        <figure className="detail-logocontainer">
          <img src={logo} alt="imagen beneficio" className="detail-logo" />
        </figure>
        <div className="detail-textcontainer">
          <h5 className="detail-title">
            {name}
          </h5>
          <div className="detail-contact">
            <a className="title-icon" href={weburl}>
              <img src={webimg} alt="web" className="image-icon" />
            </a>
            <a className="title-icon">
              <img src={phoneimg} alt="phone" className="image-icon" />{phone}
            </a>
            <a className="title-icon" href={igurl}>
              <img src={igimg} alt="instagram" className="image-icon" />
            </a>
            <a className="title-icon" href={fburl}>
              <img src={fbimg} alt="facebook" className="image-icon" />
            </a>
          </div>
        </div>
      </div>
      <h4 className="detail-benefit">{discount}</h4>
      <p className="detail-conditions">{condition}</p>
      <button onClick={this.togglePopup.bind(this)} className="detail-button">Obtener beneficio</button>
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
  }

  render(){
   const {logo, discount, name, lat, lng, condition, fburl, igurl, phone, weburl} = this.props.location.state
    return(
      <div className="detail">
      <DetailTitle />
        <div className="detail-box">
          <DetailMap 
          lat={lat} 
          lng={lng}  
          />
          <DetailInfo 
          logo={logo} 
          discount={discount} 
          name={name} 
          condition={condition} 
          fburl={fburl}
          igurl={igurl}
          phone={phone}
          weburl={weburl}
          />
        </div>
      </div>
    );
  }
}



export default DetailBox