
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class EditDispatch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        drivername: '',
        driverphone: 0,
        pickuplocation: '',
        phonenumber: 0,
        pickupinstructions: '',
        pickupdate: new Date(),
        dropofflocation: '',
        dropoffphonenumber: 0,
        dropoffinstructions: '',
        dropoffdate: new Date(),
        driver: []
      }

      this.onChangedropoffdate = this.onChangedropoffdate.bind(this)
      this.onChangedropoffinstructions = this.onChangedropoffinstructions.bind(this)
      this.onChangedropoffphonenumber = this.onChangedropoffphonenumber.bind(this)
      this.onChangedropofflocation = this.onChangedropofflocation.bind(this)
      this.onChangepickupdate = this.onChangepickupdate.bind(this)
      this.onChangepickupinstructions = this.onChangepickupinstructions.bind(this)
      this.onChangepickupPhoneNumber = this.onChangepickupPhoneNumber.bind(this)
      this.onChangeDrivername = this.onChangeDrivername.bind(this)
      this.onChangeDriverPhone = this.onChangeDriverPhone.bind(this)
      this.onChangePickUpLocation = this.onChangePickUpLocation.bind(this)
      this.onSubmit = this.onSubmit.bind(this)


    }

    componentDidMount() {
      axios.get('http://localhost:5000/dispatches/'+this.props.match.params.id)
        .then(response => {
            this.setState({
              drivername: response.data.drivername,
              driverphone: response.data.driverphone,
              pickuplocation: response.data.pickuplocation,
              phonenumber: response.data.phonenumber,
              pickupinstructions: response.data.pickupinstructions,
              pickupdate: new Date(response.data.pickupdate),
              dropofflocation: response.data.dropofflocation,
              dropoffphonenumber: response.data.dropoffphonenumber,
              dropoffinstructions: response.data.dropoffinstructions,
              dropoffdate: new Date(response.data.dropoffdate),
              
            });
           console.log(response.data)
        })
        .catch((error) => {
          console.log(error +   ' axios edit dispatch')
        })

        axios.get('http://localhost:5000/drivers/')
          .then(response => {
            this.setState({ driver: response.data.map(driver => driver.drivername)});
          })
          .catch((error) => { console.log(error);})
    }
    
    



    onChangedropoffdate(date) {
      this.setState({ dropoffdate: date});
    }



    onChangedropoffinstructions(e) {
      this.setState({ dropoffinstructions: e.target.value});
    }

    onChangedropoffphonenumber(e) {
      this.setState({ dropoffphonenumber: e.target.value});
    }

    onChangepickupdate(date) {
      this.setState({ pickupdate: date});
    }

    onChangedropofflocation(e) {
      this.setState({ dropofflocation: e.target.value});
    }

    onChangepickupinstructions(e) {
      this.setState({ pickupinstructions: e.target.value});
    }

    onChangepickupPhoneNumber(e) {
      this.setState({ phonenumber: e.target.value});
    }

    onChangeDrivername(e) {
      this.setState({ drivername: e.target.value});
      console.log(this.state.drivername)
    }

    onChangeDriverPhone(e) {
      this.setState({ driverphone: e.target.value});
    }

    onChangePickUpLocation(e) {
      this.setState({ pickuplocation: e.target.value});
    }

    onSubmit(e) {
      e.preventDefault();

      const dispatch = {
        drivername: this.state.drivername,
        driverphone: this.state.driverphone,
        pickuplocation: this.state.pickuplocation,
        phonenumber: this.state.phonenumber,
        pickupinstructions: this.state.pickupinstructions,
        pickupdate: this.state.pickupdate,
        dropofflocation: this.state.dropofflocation,
        dropoffphonenumber: this.state.dropoffphonenumber,
        dropoffinstructions: this.state.dropoffinstructions,
        dropoffdate: this.state.dropoffdate,
      };
      console.log(dispatch);
      axios.post('http://localhost:5000/dispatches/update/'+this.props.match.params.id, dispatch)
        .then(res => console.log(res.data));

        window.location = '/dispatches'
    }

  render() {
    return (
      <div>
        <h3>Edit Dispatch</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>
              Driver <select
                              required
                              className="form-control"
                              value={this.state.drivername}
                              onChange={this.onChangeDrivername}
                              >
                                
                                {this.state.driver.map(function(driver) {
                                  return <option key={driver}
                                                value={driver}>{driver}
                                                </option>;
                                })
                                }
                              </select>
            </label>
          </div>
          <div className="form-group">
            <label>
              Driver's Phone number: <input 
                                      type="tel"
                                      className="form-control"
                                      value={this.state.driverphone}
                                      onChange={this.onChangeDriverPhone}
                                      />
            </label>
          </div>
          <div className="form-group">
            <label>
              Pick up location: <input 
                                      type="text"
                                      className="form-control"
                                      value={this.state.pickuplocation}
                                      onChange={this.onChangePickUpLocation}
                                      />
            </label>
          </div>
          <div className="form-group">
            <label>
              Phone Number: <input 
                                      type="tel"
                                      className="form-control"
                                      value={this.state.phonenumber}
                                      onChange={this.onChangepickupPhoneNumber}
                                      />
            </label>
          </div>
          <div className="form-group">
            <label>
              Pick up Instructions: <textarea 
                                      className="form-control"
                                      value={this.state.pickupinstructions}
                                      onChange={this.onChangepickupinstructions}
                                      />
            </label>
          </div>
          <div className="form-group">
            <label>Pick up Date </label>
            <div>
              <DatePicker
                selected={this.state.pickupdate}
                onChange={this.onChangepickupdate}
                />
            </div>
          </div>
          <div className="form-group">
            <label>
              Drop off location: <input 
                                      type="text"
                                      className="form-control"
                                      value={this.state.dropofflocation}
                                      onChange={this.onChangedropofflocation}
                                      />
            </label>
          </div>
          <div className="form-group">
            <label>
              Drop off Phone: <input 
                                      type="tel"
                                      className="form-control"
                                      value={this.state.dropoffphonenumber}
                                      onChange={this.onChangedropoffphonenumber}
                                      />
            </label>
          </div>
          <div className="form-group">
            <label>
              Drop off instructions: <textarea
                                      className="form-control"
                                      value={this.state.dropoffinstructions}
                                      onChange={this.onChangedropoffinstructions}
                                      />
            </label>
          </div>
          <div className="form-group">
            <label>
              Drop off Date 
              <div>
                <DatePicker
                  selected={this.state.dropoffdate}
                  onChange={this.onChangedropoffdate}
                  />
              </div>
            </label>
          </div>
          <div className="form-group">
            <input type="submit" value="Edit Dispatch" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}