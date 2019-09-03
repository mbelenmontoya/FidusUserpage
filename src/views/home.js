import React from 'react'

import Carousel from '../components/carousel'
import BenefitBox from '../components/benefitBox'
import News from '../components/news'
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
      { benefitboxItems.map(({ name, url, title }) => (
          <BenefitBox name={name} url={url} title={title} />
        )) }
      <BannerBusiness />
      <News />
    </div>
  );
}

export default Home