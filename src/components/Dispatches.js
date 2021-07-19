
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dispatch = props => (
  <tr>
    <td>{props.dispatch.driver}</td>
    <td>{props.dispatch.pickuplocation}</td>
    <td>{props.dispatch.pickupdate.substring(0,10)}</td>
    <td>{props.dispatch.dropofflocation}</td>
    <td>{props.dispatch.dropoffdate.substring(0,10)}</td>
    <td>
      <Link to={"/editdispatch/"+props.dispatch._id}>edit</Link> | <Link to="#" onClick={() => { props.deleteDispatch(props.dispatch._id) }}>delete</Link>
    </td>
  </tr>
)

export default class Dispatches extends Component {
constructor(props) {
    super(props);
    this.deleteDispatch = this.deleteDispatch.bind(this);
    this.state = {dispatches: [] };
  }

    deleteDispatch(id) {
      axios.delete('http://localhost:5000/dispatches/'+id)

        this.setState({
          dispatches: this.state.dispatches.filter(dis => dis._id !== id)
        })
    }

    componentDidMount() {
      axios.get('http://localhost:5000/dispatches/')
        .then(response => {
          this.setState({ dispatches: response.data });
        })
        .catch((error) => {
          console.log(error);
        })
    }

    dispatchList() {
      return this.state.dispatches.map(currentdispatch => {
        return <Dispatch dispatch={currentdispatch} deleteDispatch={this.deleteDispatch} key={currentdispatch._id}/>;
      })
    }
  
  render() {
    return (
      <div>
        <h3>Open Dispatches</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Drivername</th>
              <th>Pickuplocation</th>
              <th>Pickupdate</th>
              <th>Dropofflocation</th>
              <th>Dropoffdate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.dispatchList() }
          </tbody>
        </table>
        <Link to={"/createdispatch"}>Create A dispatch</Link>
      </div>
    )
  }
}