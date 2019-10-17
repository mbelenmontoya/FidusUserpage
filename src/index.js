import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import { Router, Switch, Route } from "react-router-dom"
import { createBrowserHistory } from 'history';

//components
import Header from './components/header'
import Footer from './components/footer'


import Home from './views/home'
import BenefitView from './views/benefitview'
import CategoriesView from './views/categoriesview'
import Faqs from './views/faqs'
import Contact from './views/contact'
import Detail from './views/detail'
import Search from './views/search'

const browserHistory = createBrowserHistory();

browserHistory.listen((location, action) => {
  window.scrollTo(0, 0);
});

const Main = (
    <Router history={browserHistory}>
    <div className="main">
      <Header history={browserHistory}/>
      <Switch>
<<<<<<< Updated upstream
        <Route exact path="/fidusclub" component={() => <BenefitView name='/fidusclub' url='featured_mobile_rewards' categorie='categories' title='Fidus Club' />} />
        <Route exact path="/fidusuniversitarios" component={() => <BenefitView name='/fidusuniversitarios' url='featured_mobile_rewards_universities' categorie='categories_universities' title='Fidus Universitarios' />} />
        <Route exact path="/faqs" component={Faqs} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/detail/:id" component={Detail} / >
        <Route path="/search/:value" component={Search} / >
        <Route component={Home} />
      </Switch>
=======
        <Route exact path="/" component={Home} />
        <Route exact path="/fidusclub" 
        component={() => 
        <BenefitView 
        name='/fidusclub' 
        url='featured_mobile_rewards' 
        categorie='categories' 
        title='Fidus Club'
        categoriepath='/fidusclub/categorias'
         />} />
        <Route exact path="/fidusempresas" 
        component={() => 
        <BenefitView 
        name='/fidusempresas' 
        url='featured_mobile_rewards_companies' 
        categorie='categories_companies' 
        title='Fidus Empresas' 
        categoriepath='/fidusempresas/categorias'
        />} />
        <Route exact path="/fidusuniversitarios" 
        component={() => <BenefitView 
        name='/fidusuniversitarios' 
        url='featured_mobile_rewards_universities' 
        categorie='categories_universities' 
        title='Fidus Universitarios'
        categoriepath='/fidusuniversitarios/categorias' />} />
        <Route exact path="/faqs" component={Faqs} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/detail" component={Detail} / >
        <Route exact 
          path="/fidusclub/categoria" 
          component={() => <CategoriesView 
          url='category' 
          title='Categorías Fidus Club'
           />} 
        />
        <Route exact 
          path="/fidusempresas/categoria" 
          component={() => <CategoriesView 
          url='category_companies' 
          title='Categorías Fidus Empresas'
           />} 
        />
        <Route exact 
          path="/fidusuniversitarios/categoria" 
          component={() => <CategoriesView 
          url='category_universities' 
          title='Categorías Fidus Universitarios'
           />} 
        />
        
        </Switch>
>>>>>>> Stashed changes
      <Footer />
    </div>
    </Router>
)


ReactDOM.render(
  Main,
  document.getElementById('root')
);
<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
