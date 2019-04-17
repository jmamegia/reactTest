import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Page0 extends Component {
  render() {
    return (
      <div className="App">
          <p>
            <Link to="/Page1">Page1 </Link>
            <Link to="/Page2">Page2 </Link>
          </p>
      </div>
    );
  }
}

export default Page0;