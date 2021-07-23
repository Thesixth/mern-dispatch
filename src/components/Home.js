import React, { Component } from 'react';
import '../styles/home.css';


export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <header>
        <div className="banner">
          <div id="overlay"></div>
          <p id="tag">Fast Solutions For All Your Hauling Needs</p>
          <a href="mailto:palinendir@gmail.com" title="email admin. opens in a new tab" target="_blank" rel="noopener noreferrer" className="quote bannerquote">Get A Quote</a>
        </div>
        </header>
        <main className="displayAbsolute">
          <h2> Here To Help</h2>
          <div className="displayflex">
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
            <ul aria-label="Flat and Step decks">
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
          <h2>Our Services</h2>
          <div className="services">
            <h3>Full Truck Load</h3>
            <p>We move FTL's including lumber, AC & HVAC units, Machines, Over Dimensional, Air Craft Parts, Hazmat and much more with a lot of expereinced drivers from Western Canada to all over US and US to Western Canada.
            </p>
          </div>
          <div className="services">
            <h3>LTL & Partial Shipments</h3>
            <p>Whether you wish to move a small skid or a expedited partial, we move all sorts of partials with a delivery schedule of 5 - 9 days depending on your requirment. Our staff is here to help.  We are eager to ensure that everything is done to your requirements.
            </p>
          </div>
        </main>
      </div>
    )
  }
}