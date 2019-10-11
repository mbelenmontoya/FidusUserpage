import React from 'react'

import Carousel from '../components/carousel'
import BenefitBox from '../components/benefitBox'
import BannerBusiness from '../components/bannerbusiness'

const Home = () => {
  return(
    <div className="home">
      <Carousel />
      <BenefitBox name='fidusclub' url='featured_mobile_rewards' title='Fidus Club' />
      <BannerBusiness />
      <BenefitBox name='fidusuniversitarios' url='featured_mobile_rewards_universities' title='Fidus Universitarios' />
    </div>
  );
}

export default Home
