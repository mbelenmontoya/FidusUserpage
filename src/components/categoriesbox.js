import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link } from "react-router-dom"


const CategorieTitle = () => {
  return (
    <h2 className="section-title">Categorías</h2>
  );
}

const CategorieBox = props =>{
  const { image, title, count, id, path } = props;
  return(
    <Link className="categorie-box" style={{backgroundImage:`url(${image})`}} to={{
        pathname: `${path}`,
        state: {
          id: {id}
        }
      }}>
      <div className="categorie-title">{title}</div>
      <div className="categorie-subtitle"></div>
      <div className="categorie-rewards">{count} premios</div>
    </Link>
  );
}

class CategorieInfo extends Component{
  state = {
   list: []
 }


 componentDidMount(){
   axios.get(`https://dashboard.fidus.com.ar/api/v1/landing/${this.props.url}`)
   .then(res => {
     const list = res.data.categories;
     this.setState({ list });
   })
 }

 render(){
   return(
      <div className="categorie-container">
      {this.state.list.map(categorie => 
        <CategorieBox image={categorie.picture} title={categorie.name} count={categorie.reward_count} id={categorie.id} path={this.props.path}  /> 
      )}
      </div>
   );
 }

}


const CategoriesBox = props =>{
  const { url, path } = props;
  return (
    <div className="categorie">
      <CategorieTitle />
      <CategorieInfo url={url} path={path} />
    </div>
  );
}

export default CategoriesBox