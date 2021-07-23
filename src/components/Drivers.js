
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/dispatch.css';

const Driver = props => (
  <tr>
    <td>{props.drivers.drivername}</td>
    <td>{props.drivers.driverphone}</td>
  </tr>
)

export default class Drivers extends Component {
  constructor(props) {
    super(props)
    this.state = { drivers: [] };
  }

  componentDidMount() {
      axios.get('http://localhost:5000/drivers/')
        .then(response => {
          this.setState({ drivers: response.data });
        })
        .catch((error) => {
          console.log(error + ' did not get the drivers');
        })
  }

  driversList() {
    return this.state.drivers.map(currentDriver => {
      return <Driver drivers={currentDriver} key={currentDriver._id}/>
    })
  }


  render() {
    return (
      <div className="content">
        <h3>Our Drivers</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Driver's Name</th>
              <th>Driver's Phone Number</th>
            </tr>
          </thead>
          <tbody>
            { this.driversList() }
          </tbody>
        </table>
        <Link to={"/createdriver/"}>Add a New Driver</Link>        
      </div>
    )
  }
}