import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import EditDispatch from './components/EditDispatch';
import CreateDispatch from './components/CreateDispatch';
import CreateDriver from './components/CreateDriver';
import Dispatches from './components/Dispatches';
import './App.css';
import Drivers from './components/Drivers';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/editdispatch/:id" component={EditDispatch} />
        <Route path="/dispatches" component={Dispatches} />
        <Route path="/createdispatch" component={CreateDispatch} />
        <Route path="/drivers" component={Drivers} />
        <Route path="/createdriver" component={CreateDriver} />
        <br />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
