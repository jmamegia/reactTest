import React, { Component } from 'react';
import logo from '../../logo.svg';
import {Link} from 'react-router-dom'


class Page1 extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Working!!!!
          </p>
          <Link to="/">Return</Link> 
      </div>
    );
  }
}

export default Page1;