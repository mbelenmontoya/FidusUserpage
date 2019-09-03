import React from 'react'

import BenefitBox from '../components/benefitBox'
import Categories from '../components/categories'

const BenefitView = props =>{
const {name, url, categorie, title} = props;
  return(
    <div className="benefit-view">
      <BenefitBox name={name} url={url} title={title} />
      <Categories url={categorie} />
    </div>
  );
}

export default BenefitView