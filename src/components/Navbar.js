import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

export default class Navbar extends Component {

  render() {
    return (
      <div className="nav">
        <div className="brand"><Link to="/">E-TRUCKING LTD</Link></div>
        <ul>
          <li><Link className="active" to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dispatches">Dispatches</Link></li>
          <li><Link to="/drivers">Drivers</Link></li>
        </ul>
      </div>
    );
  }
}