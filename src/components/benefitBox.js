import React, { Component } from 'react'
import axios from 'axios'

import noimage from '../images/assets/noimage.png'


const BenefitTitle = props => {
  const {title} = props;
  switch(title) {
    case 'fidusclub':
      return <h2 className="section-title">Fidus Club</h2>;
    case 'fidusempresas':
      return <h2 className="section-title">Fidus Empresas</h2>;
    case 'fidusuniversitarios':
      return <h2 className="section-title">Fidus Universidades</h2>;
    default:
      return <h2 className="section-title">Fidus</h2>;
  }
}

const Benefit = props => {
  const { image, logo, discount, name } = props;
  return (
      <div className="benefit-box">
        <figure className="benefit-imagecontainer">
          <img src={image !== '' && image !== null ? image : noimage} alt="" className="benefit-image" />
        </figure>
        <div className="benefit-contentbox">
          <img src={logo} alt="logo del beneficio" className="benefit-logo" />
          <div className="benefit-contentcontainer">
            <h4 className="benefit-name">{name}</h4>
            <h3 className="benefit-benefit">{discount}</h3>
          </div>
        </div>
      </div>
  )
}


class BenefitCall extends Component{
 state = {
   list: []
 }

 componentDidMount(){
   axios.get(`http://stage.fidus.com.ar/api/v1/landing/${this.props.url}`)
   .then(res => {
     const list = res.data.rewards;
     this.setState({ list });
   })
 }

 render(){
   return(
      <div className="benefit-containerboxes">
      {this.state.list.map(reward => 
        <Benefit image={reward.picture} logo={reward.place_logo} discount={reward.description} name={reward.place_name} />     
      )}
      </div>
   );
 }

}

const BenefitBox = props => {
  const {name, url, match} = props;
  return(
    <div className="benefit">
       <BenefitTitle title={match !== undefined ? match.params.id : name} />
       <BenefitCall url={url} />
    </div>
  );
}


export default BenefitBox