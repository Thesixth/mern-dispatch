
import React, { Component } from 'react';
import axios from 'axios';

export default class CreateDriver extends Component {
  constructor(props) {
    super(props);
    this.onChangedrivername = this.onChangedrivername.bind(this);
    this.onChangedriverphone = this.onChangedriverphone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      drivername: '',
      driverphone: 0
    };
  }

  onChangedrivername(e) {
    this.setState({
      drivername: e.target.value,
    });
  }

  onChangedriverphone(e) {
    this.setState({
      driverphone: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newDriver = {
      drivername: this.state.drivername,
      driverphone: this.state.driverphone
    };
    console.log(newDriver);

    axios.post('http://localhost:5000/drivers/add', newDriver)
  .then(res => console.log(res.data));
    
    this.setState({
      drivername: '',
      driverphone: 0
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Driver</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label htmlFor="drivername">Driver's Name: </label>
            <input  type="text"
                id="drivername"
                required
                className="form-control"
                value={this.state.drivername}
                onChange={this.onChangedrivername}
                />
            <label htmlFor="driverphone">Driver's Phone Number</label>
            <input type='tel'
                    required
                    className="form-control"
                    value={this.state.driverphone}
                    onChange={this.onChangedriverphone}
                    />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}