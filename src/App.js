import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Currencies from './Currencies'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Currencies></Currencies>
        </div>
      </div>
    );
  }
}

export default App;
