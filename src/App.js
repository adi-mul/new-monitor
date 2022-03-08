import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import './App.css';
import React,{Component} from 'react';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Deafult from './components/Deafult';


function App() {
  return (
    <React.Fragment>
     <Router> 
          <Navbar/>
          <Switch>
          <Route exact path="/" component={ProductList}/>
              <Route path='/details' component={Details}/>
              <Route path='/cart' component={Cart}/>
              <Route component={Deafult}/>

              
              

          </Switch>
    </Router> 

    </React.Fragment>
  );
}

export default App;
