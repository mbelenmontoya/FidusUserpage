import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//components
import Header from './components/header'
import Footer from './components/footer'


import Home from './views/home'
import BenefitView from './views/benefitview'
import Faqs from './views/faqs'
import Contact from './views/contact'
import Detail from './views/detail'


const Main = (
    <Router>
    <div className="main">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fidusclub" component={() => <BenefitView name='/fidusclub' url='featured_mobile_rewards' categorie='categories' title='Fidus Club' />} />
        <Route exact path="/fidusempresas" component={() => <BenefitView name='/fidusempresas' url='featured_mobile_rewards_companies' categorie='categories_companies' title='Fidus Empresas' />} />
        <Route exact path="/fidusuniversitarios" component={() => <BenefitView name='/fidusuniversitarios' url='featured_mobile_rewards_universities' categorie='categories_universities' title='Fidus Universitarios' />} />
        <Route exact path="/faqs" component={Faqs} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/detail" component={Detail} / >
        </Switch>
      <Footer />
    </div>
    </Router>
)




ReactDOM.render(
  Main,
  document.getElementById('root')
);