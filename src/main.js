import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

//components
import Header from './components/header'
import Footer from './components/footer'


import Home from './views/home'
import BenefitView from './views/benefitview'
import Faqs from './views/faqs'
import Contact from './views/contact'
import Detail from './views/detail'



const benefitboxItems = [
    { href: '/fidusclub', url: 'featured_mobile_rewards', categorie: 'categories', title:'Fidus Club' },
    { href: '/fidusempresas', url: 'featured_mobile_rewards_companies', categorie: 'categories_companies', title: 'Fidus Empresas' },
    { href: '/fidusuniversitarios' , url: 'featured_mobile_rewards_universities', categorie: 'categories_universities', title: 'Fidus Universitarios' },
];

const Main = () => {
  return(
    <div className="main">
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
        { benefitboxItems.map(({ href, url, categorie, title }) => (
          <Route path={href} exact component={() => <BenefitView name={href} url={url} categorie={categorie} title={title} />} />
        )) }
        <Route exact path="/faqs" component={Faqs} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/detail" component={Detail} />
      </Router>
      <Footer />
    </div>
  );
}

export default Main;