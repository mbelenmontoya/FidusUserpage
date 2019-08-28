import React from 'react'

//components
import Header from './components/header'
import Carousel from './components/carousel'
import BenefitBox from './components/benefitBox'
import News from './components/news'
import BannerBusiness from './components/bannerbusiness'
import ShoppingMals from './components/shoppingmals'
import Footer from './components/footer'

const Main = () => {
  return(
    <div className="main">
      <Header />
      <Carousel />
      <BenefitBox />
      <News />
      <BannerBusiness />
      <ShoppingMals />
      <Footer />
    </div>
  );
}

export default Main;