import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

export default class Nav extends Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div className="container">
    <Link to="/" className="navbar-brand">Fabbi Demo</Link>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <i className="fa fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/detail" className="nav-link">Detail Post</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </div>
    )
  }
}
