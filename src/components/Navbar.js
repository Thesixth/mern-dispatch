import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

export default class Navbar extends Component {

  render() {
    return (
      <div className="nav">
        <div className="brand"><Link to="/">E TRUCKING</Link></div>
        <Link className="active" to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dispatches">Dispatches</Link>
        <Link to="/drivers">Drivers</Link>
    </div>
    );
  }
}