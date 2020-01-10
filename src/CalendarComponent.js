import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { mapStateToProps, mapDispatchToProps } from "./mapStateToProps";
class CalendarComponent extends Component {
  maxVal = moment().format("YYYY-MM-DD");
  render() {
    return (
      <div className="container">
        <div className="form-inline">
          <label htmlFor="date">
            {this.props.value === "startDate" ? <>Start Date</> : <>End Date</>}
          </label>
          <input
            className="form-control"
            type="date"
            defaultValue={
              this.props.value === "startDate"
                ? this.props.startDate
                : this.props.endDate
            }
            max={this.maxVal}
            onChange={evt => {
              this.props.ChangeDate(this.props.value, evt.target.value);
            }}
          ></input>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CalendarComponent);
