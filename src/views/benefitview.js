import React from 'react'

import BenefitBox from '../components/benefitBox'
import CategoriesBox from '../components/categoriesbox'

const BenefitView = props =>{
const {name, url, categorie, title, categoriepath} = props;
  return(
    <div className="benefit-view">
      <BenefitBox name={name} url={url} title={title} />
      <CategoriesBox url={categorie} path={categoriepath} />
    </div>
  );
}

export default BenefitView