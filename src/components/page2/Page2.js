import React, { Component } from 'react';
import logo from '../../logo.svg';
import {Link} from 'react-router-dom'
import './Page2.css'

class Page2 extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo-reverse" alt="logo" />
          <p>
            Working2!!!!
          </p>
          <Link to="/">Return</Link>  
      </div>
    );
  }
}

export default Page2;