import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

export default class Footer extends Component {

  render() {
    return (
        <div>
            <div className="callToAction">
            <a href="mailto:palinendir@gmail.com" title="email admin. opens in a new tab" target="_blank" rel="noopener noreferrer" className="quote">Get A Quote</a>
            </div>
            <div className="quickLinks">
                <p>Quick Links</p>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/dispatches">Dispatches</Link>
                <Link to="/drivers">Drivers</Link>
            </div>
            <div className="copyright">
                <p>&copy; Copyright 2021 Emmanuel Pali</p>
            </div>
            <div className="contact">
                <p>+16048529193</p>
                <a href="mailto:palinendir@gmail.com" title="email admin. opens in a new tab" target="_blank" rel="noopener noreferrer" >email</a>
            </div>
        </div>
    );
  }
}