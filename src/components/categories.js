import React, { Component } from 'react'
import axios from 'axios'


const CategorieTitle = () => {
  return (
    <h2 className="section-title">Categorías</h2>
  );
}

const CategorieBox = props =>{
  const { image, title, count } = props;
  return(
    <div className="categorie-box" style={{backgroundImage:`url(${image})`}}>
      <div className="categorie-title">{title}</div>
      <div className="categorie-subtitle"></div>
      <div className="categorie-rewards">{count} premios</div>
    </div>
  );
}

class CategorieInfo extends Component{
  state = {
   list: []
 }


 componentDidMount(){
   axios.get(`https://stage.fidus.com.ar/api/v1/landing/${this.props.url}`)
   .then(res => {
     const list = res.data.categories;
     this.setState({ list });
   })
 }

 render(){
   return(
      <div className="categorie-container">
      {this.state.list.map(categorie => 
        <CategorieBox image={categorie.picture} title={categorie.name} count={categorie.reward_count}  />     
      )}
      </div>
   );
 }

}


const Categories = props =>{
  const { url } = props;
  return (
    <div className="categorie">
      <CategorieTitle />
      <CategorieInfo url={url} />
    </div>
  );
}

export default Categories