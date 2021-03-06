import React, { Component } from 'react'
import axios from 'axios'
import { baseUrl } from '../config'
import { Link } from "react-router-dom"

import noimage from '../images/assets/noimage.png'

<<<<<<< Updated upstream
=======
//loader
import Loader from "./loader"


>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <div className="benefit-back-container">
              <h3 className="benefit-benefit">{discount}</h3>
              <button className="benefit-button">Canjear</button>
=======
            <div className="benefit-contentbox">
              <div className="benefit-contentcontainer">
                <h3 className="benefit-benefit">{discount}</h3>
                <span className="benefit-button">Canejar</span>
              </div>
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </Link>
  )
}

<<<<<<< Updated upstream
class BenefitBox extends Component {
=======


class BenefitBox extends Component{
  
>>>>>>> Stashed changes
  constructor(props){
    super(props);
    this.state = {
      list: [],
<<<<<<< Updated upstream
      loading: true,
=======
      loading: true
>>>>>>> Stashed changes
    }
  }
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

<<<<<<< Updated upstream
 componentDidMount() {
   if (this.props.list) {
     this.setState({ list: this.props.list, loading: false })
     return;
   }
   axios.get(`${baseUrl}/landing/${this.props.url}`)
   .then(res => {
     const list = res.data.rewards;
     this.setState({ list, loading: false });
=======
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      list: [],
      loading: false
    });
  };

 componentDidMount(){
   axios.get(`https://dashboard.fidus.com.ar/api/v1/landing/${this.props.url}`)
    .then(res => {
     const list = res.data.rewards;
     this.setState({ list, loading: false });
     
>>>>>>> Stashed changes
   })
   .catch(error => {
        console.log(error);
        this.wait();
    });
 }

 renderBenefits() {
   const { list, loading } = this.state
   if (loading) {
     return
   }
   if (list.length === 0) {
     return ( <p className="benefit-no-rewards">No se encontró ningún premio!</p> )
   } else {
     return (
       list.map(reward =>
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
       )
     )
   }
 }

 render(){
   if (this.state.loading) return <Loader />;
   return(
      <div className="benefit">
        <BenefitTitle title={this.props.title} />
        <div className="benefit-containerboxes">
          {this.renderBenefits()}
        </div>
      </div>
   );
 }
}

<<<<<<< Updated upstream

export default BenefitBox
=======
export default BenefitBox
>>>>>>> Stashed changes
