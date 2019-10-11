import React, { Component } from 'react'

import Popup from '../components/popup'
import Map from '../components/mapcontainer'

//images
import webimg from '../images/assets/weburl.png'
import igimg from '../images/assets/iglogo.png'
import fbimg from '../images/assets/fblogo.png'

const DetailMap = props => {
  const {name, lat, lng} = props
  return (
    <div className="detail-map">
      <Map lat={lat} lng={lng} name={name}/>
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

 socialIcons() {
   const {weburl} = this.props.weburl
   const {igurl} = this.props.igurl
   const {fburl} = this.props.fburl
   const socials = [
     [weburl, webimg],
     [igurl, igimg],
     [fburl, fbimg],
   ].filter(socialInfo => !!socialInfo[0]);
   return (
     <div className="detail-contact">
       {socials.map(socialInfo => (
         <a key={socialInfo[0]} className="title-icon" href={socialInfo[0]}>
           <img src={socialInfo[1]} alt="web" className="image-icon" />
         </a>
       ))}
     </div>
   )
 }

  render(){
    const {logo} = this.props.logo
    const {name } = this.props.name
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
          {this.socialIcons()}
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

class DetailBox extends Component {

  detailMap(lat, lng) {
    if (!lat.lat || !lng.lng) {
      return null;
    }
    return (
      <DetailMap
        lat={lat.lat}
        lng={lng.lng}
        />
    )
  }

  render(){
   const {logo, discount, name, lat, lng, condition, fburl, igurl, phone, weburl} = this.props.location.state
    return(
      <div className="detail">
        <div className="detail-box">
          {this.detailMap(lat, lng)}
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
