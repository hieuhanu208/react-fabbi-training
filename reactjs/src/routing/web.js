import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from '../component/contact';
import Home from '../component/Home';
import Detail from '../component/detail';


export default class Routing extends Component {
  render() {
    return (
        <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:slug.:id" component={Detail} />
        <Route exact path="/contact" component={Contact} />
        </div>
   
    )
  }
}
