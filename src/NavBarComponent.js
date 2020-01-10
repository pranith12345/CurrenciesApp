import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class NavBarComponent extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Finance
        </a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#Currencies">
              Currencies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Config">
              Config
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default NavBarComponent;
