import React from 'react'

import BenefitBoxId from '../components/benefitboxid'

function CategoriesView(props){
  const { url, title, id} = props;
  return(
    <div className="benefit-view">
      <BenefitBoxId url={url} title={title} id={id} />
    </div>
  );
} 

export default CategoriesView