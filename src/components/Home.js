import React, { Component } from 'react';
import '../styles/home.css';


export default class Home extends Component {
  render() {
    return (
      <div className="displayRelative">
        <div className="banner">
          <p>Fast Solutions to All Your Hauling Needs</p>
          <a href="mailto:palinendir@gmail.com" title="email admin. opens in a new tab" target="_blank" rel="noopener noreferrer" className="quote">Get A Quote</a>
        </div>
        <div className="displayAbsolute">
          <p> Ready To Help</p>
          <div className="left">
            <ul aria-label="We Haul Everything">
              <li>
                Hazmat
              </li>
              <li>
                Avaition Parts
              </li>
              <li>
                
                Machines
              </li>
              <li>
                Oil Field Equipment
              </li>
              <li>
                Overdimentional loads
              </li>
              <li>
                Tanks 
              </li>
              <li>
                A lot more
              </li>
            </ul>
          </div>
          <div className="right">
            <ul aria-label="Well equiped Flat and step decks">
            <li>
                Corner Protectors
              </li>
              <li>
                Straps
              </li>
              <li>
                Tarps
              </li>
              <li>
                Coil Bunks
              </li>
              <li>
                Pipe Stacks
              </li>
              <li>
                Chains 
              </li>
              <li>
                Binders
              </li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}