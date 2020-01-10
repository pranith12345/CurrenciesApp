import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CalendarComponent from "./CalendarComponent";
import { connect } from "react-redux";
import CurrencyTypeComponent from "./CurrencyTypeComponent";
import { mapStateToProps, mapDispatchToProps } from "./mapStateToProps";
class Sidebar extends Component {
  render() {
    return (
      <div className="container">
        <CalendarComponent value="startDate"></CalendarComponent>
        <CalendarComponent value="endDate"></CalendarComponent>
        <CurrencyTypeComponent></CurrencyTypeComponent>
        <br />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
