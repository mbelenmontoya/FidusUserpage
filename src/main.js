import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"


//components
import Header from './components/header'
import Footer from './components/footer'

import Home from './views/home'
import BenefitBox from './components/benefitBox'
import Faqs from './views/faqs'
import Contact from './views/contact'


const Main = () => {
  return(
    <div className="main">
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={BenefitBox} />
        <Route exact path="/faqs" component={Faqs} />
        <Route exact path="/contact" component={Contact} />
      </Router>
      <Footer />
    </div>
  );
}

export default Main;