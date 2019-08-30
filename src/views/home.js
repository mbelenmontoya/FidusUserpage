import React from 'react'

import Carousel from '../components/carousel'
import BenefitBox from '../components/benefitBox'
import News from '../components/news'
import BannerBusiness from '../components/bannerbusiness'
import ShoppingMals from '../components/shoppingmals'

const benefitboxItems = [
    { name: 'fidusclub', url: 'featured_mobile_rewards' },
    { name: 'fidusempresas', url: 'featured_mobile_rewards_companies' },
    { name: 'fidusuniversitarios' , url: 'featured_mobile_rewards_universities' },
];

const Home = () => {
  return(
    <div className="home">
      <Carousel />
      { benefitboxItems.map(({ name, url }) => (
          <BenefitBox name={name} url={url} />
        )) }
      <News />
      <BannerBusiness />
      <ShoppingMals />
    </div>
  );
}

export default Home