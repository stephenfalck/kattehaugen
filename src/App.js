import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import asyncComponent from './HOC/asyncComponent';
import Home from './home/home'
import Contact from './contact/contact';
import Navbar from './navbar/navbar';
import Footer from './footer';

const asyncAboutPage = asyncComponent(() => {
  return import('./about/about')
})

const asyncConditionsPage = asyncComponent(() => {
  return import('./conditions/conditions')
})

const asyncGalleryPage = asyncComponent(() => {
  return import('./gallery/gallery')
})

const async404Page = asyncComponent(() => {
  return import('./404/404')
})

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/om-oss' component={asyncAboutPage}/>
          <Route path='/betingelser' component={asyncConditionsPage}/>
          <Route path='/galleri' component={asyncGalleryPage}/>
          <Route path='/kontakt' component={Contact}/>
          <Route component={async404Page} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
