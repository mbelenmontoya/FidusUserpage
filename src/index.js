import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import { Router, Switch, Route } from "react-router-dom"
import { createBrowserHistory } from 'history';

//components
import Header from './components/header'
import Footer from './components/footer'


import Home from './views/home'
import BenefitView from './views/benefitview'
import Faqs from './views/faqs'
import Contact from './views/contact'
import Detail from './views/detail'

const browserHistory = createBrowserHistory();

browserHistory.listen((location, action) => {
  window.scrollTo(0, 0);
});

const Main = (
    <Router history={browserHistory}>
    <div className="main">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fidusclub" component={() => <BenefitView name='/fidusclub' url='featured_mobile_rewards' categorie='categories' title='Fidus Club' />} />
        <Route exact path="/fidusuniversitarios" component={() => <BenefitView name='/fidusuniversitarios' url='featured_mobile_rewards_universities' categorie='categories_universities' title='Fidus Universitarios' />} />
        <Route exact path="/faqs" component={Faqs} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/detail/:id" component={Detail} / >
        </Switch>
      <Footer />
    </div>
    </Router>
)




ReactDOM.render(
  Main,
  document.getElementById('root')
);
