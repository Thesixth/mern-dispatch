import team  from '../teamData';
import React, { Component } from 'react';

export default class About extends Component {
  
  render() {
    return (
      <div>
        <div>
          <p>We have been in business from 2004 and look forward to grow more with your help.
          We serve lanes from Western Canada to all over US and back to Western Canada. A majority of our dedicated team of drivers have over a decade of experinece hauling 
          freight. 
          </p>
        </div>
        <div className="our-team">
          <h3>Meet The Team</h3>
          {team.map((team) =>
          <div className="teamCard" key={team.name}>
            <p>{team.name}</p>
            <div className='teamImg'>
              <img src={team.img} alt=''/>
            </div>
            <p>{team.position}</p>
          </div>
          )}  
        </div>
      </div>
    )
  }
}