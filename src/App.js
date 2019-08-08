import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './home/home'
import About from './about/about';
import Contact from './contact/contact';
import Conditions from './conditions/conditions';
import Gallery from './gallery/gallery';
import Navbar from './navbar/navbar';
import Footer from './footer';
import NoPageMatch from './404/404';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/om-oss' component={About}/>
          <Route path='/betingelser' component={Conditions}/>
          <Route path='/galleri' component={Gallery}/>
          <Route path='/kontakt' component={Contact}/>
          <Route component={NoPageMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
