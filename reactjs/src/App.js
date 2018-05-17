import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './index.css'
import Nav from './component/nav'
import Footer from './component/footer'
import Routing from './routing/web'
import Home from './component/Home'

class App extends Component {
 constructor(props){
   super(props)
 }
  
  render() {
    return (
      <Router>
      <div className="App">
        <Nav/> 
        <Routing />
        <Footer/>
      </div>
      </Router>
      
    )
  }
}

export default App;

