import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { mapStateToProps, mapDispatchToProps } from "./mapStateToProps";
import Sidebar from "./Sidebar";
import ChartComponent from "./ChartComponent";

class Currencies extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Sidebar></Sidebar>
            </div>
            <div className="col-sm-9">
              <ChartComponent></ChartComponent>
            </div>
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
