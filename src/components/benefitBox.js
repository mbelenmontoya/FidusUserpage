import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link } from "react-router-dom"

import noimage from '../images/assets/noimage.png'


const BenefitTitle = props => {
  const {title} = props;
  return (<h2 className="section-title">{title}</h2>);
}

const Benefit = props => {
  const { image, logo, discount, name, id, lat, lng, condition, fburl, igurl, phone, weburl } = props;

  return (
      <Link className="benefit-box flip-card" to={{
        pathname: `/detail/${id}`,
        state: {
          logo: {logo},
          discount: {discount},
          name: {name},
          lat: {lat},
          lng: {lng},
          condition: {condition},
          fburl: {fburl},
          igurl: {igurl},
          phone: {phone},
          weburl: {weburl}
        }
      }}>
        <div className="benefit-imagecontainer"
            style={{backgroundImage: `url(${image !== '' && image !== null ? image : noimage})`}}>
          </div>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="benefit-contentbox">
              <img src={logo} alt="logo del beneficio" className="benefit-logo" />
              <div className="benefit-contentcontainer">
                <h4 className="benefit-name">{name}</h4>
                <h3 className="benefit-benefit">{discount}</h3>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="benefit-back-container">
              <h3 className="benefit-benefit">{discount}</h3>
              <button className="benefit-button">Canjear</button>
            </div>
          </div>
        </div>
      </Link>
  )
}

class BenefitBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

 componentDidMount() {
   if (this.props.list) {
     this.setState({ list: this.props.list })
     return;
   }
   axios.get(`https://dashboard.fidus.com.ar/api/v1/landing/${this.props.url}`)
   .then(res => {
     const list = res.data.rewards;
     this.setState({ list });
   })
 }

 render(){
   return(
     <div className="benefit">
      <BenefitTitle title={this.props.title} />
        <div className="benefit-containerboxes">
        {this.state.list.map(reward =>
          <Benefit
          key={reward.id}
          image={reward.picture}
          logo={reward.place_logo}
          discount={reward.description}
          name={reward.place_name}
          id={reward.id}
          lat={reward.lat}
          lng={reward.lng}
          condition={reward.condition}
          fburl={reward.place_facebook}
          igurl={reward.place_instagram}
          phone={reward.place_phone}
          weburl={reward.place_webpage}
          />
        )}
        </div>
      </div>
   );
 }
}


export default BenefitBox
