import React, { Component } from 'react'
import axios from 'axios'

const MallTitle = () => {
  return (
    <h2 className="section-title">Centro Comerciales</h2>
  );
}

const MallBox = props =>{
  const { image, title, count } = props;
  return(
    <div className="mall-box" style={{backgroundImage:`url(${image})`}}>
      <div className="mall-title">{title}</div>
      <div className="mall-subtitle"></div>
      <div className="mall-rewards">{count} premios</div>
    </div>
  );
}

class MallInfo extends Component{
  state = {
   list: []
 }

 componentDidMount(){
   axios.get('http://stage.fidus.com.ar/api/v1/landing/categories_companies')
   .then(res => {
     const list = res.data.categories;
     this.setState({ list });
   })
 }

 render(){
   return(
      <div className="shoppingmal-container">
      {this.state.list.map(categorie => 
        <MallBox image={categorie.picture} title={categorie.name} count={categorie.reward_count}  />     
      )}
      </div>
   );
 }

}

const ShoppingMals = () =>{
  return (
    <div className="shopping-mal">
      <MallTitle />
      <MallInfo />
    </div>
  );
}

export default ShoppingMals