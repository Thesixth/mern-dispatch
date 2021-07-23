import team  from '../teamData';
import React, { Component } from 'react';
import '../styles/about.css';
//import ltl from '../images/ltl-trucking.jpg';

export default class About extends Component {
  
  render() {
    return (
      <div className="container">
        <div className='head'>
        <p>We have been in business from 2004 and look forward to grow more with your help.
          We serve lanes from Western Canada to all over US and back to Western Canada. A majority of our dedicated team of drivers have over a decade of experinece hauling 
          freight. 
          </p>
        </div>
        <main className="main">
          <h3>Meet The Team</h3>
          <div className="teamColumn">
            {team.map((team) =>
            <div className="teamCard" key={team.name}>
              <img src={team.img} alt=''/>
              <div className="teamCardInfo">
                <h4>{team.name}</h4>
                <h5>{team.position}</h5>
              </div>
            </div>
            )}  
          </div>
        </main>
      </div>
    )
  }
}