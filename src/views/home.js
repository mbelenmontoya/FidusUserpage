import React from 'react'

import Carousel from '../components/carousel'
import BenefitBox from '../components/benefitBox'
import BannerBusiness from '../components/bannerbusiness'

const benefitboxItems = [
    { name: 'fidusclub', url: 'featured_mobile_rewards' , title: 'Fidus Club' },
    { name: 'fidusempresas', url: 'featured_mobile_rewards_companies', title: 'Fidus Empresas' },
    { name: 'fidusuniversitarios' , url: 'featured_mobile_rewards_universities', title: 'Fidus Universitarios' },
];

const Home = () => {
  return(
    <div className="home">
      <Carousel />
      <BenefitBox name='fidusclub' url='featured_mobile_rewards' title='Fidus Club' />
      <BannerBusiness />
      <BenefitBox name='fidusempresas' url='featured_mobile_rewards_companies' title='Fidus Empresas' />
      <BenefitBox name='fidusuniversitarios' url='featured_mobile_rewards_universities' title='Fidus Universitarios' />
    </div>
  );
}

export default Home