import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionTypes from './ActionTypes';
import moment from 'moment';
class CalendarComponent extends Component {
    maxVal = moment().format("YYYY-MM-DD")

    render() {
        return (
            <div className="container">
                <div className="form-inline">
                    <label htmlFor="date">{this.props.value=='startDate'?(<span>Start Date</span>):<>End Date</>}</label>
                    <input type="date" defaultValue={this.props.value == 'startDate' ? this.props.startDate : this.props.endDate}
                        max={this.maxVal}
                        onChange={(evt) => {
                            this.props.ChangeDate(this.props.value,
                                evt.target.value);
                        }}></input>
                </div>
            </div >

        );
    }
}
const mapCalendarStateToProps = function (state) {
    return {
        startDate: state.startDate,
        endDate: state.endDate
    }
}
const mapCalendarDispatchToProps = function (dispatch) {
    return {
        ChangeDate: (value, date) => {
            dispatch({ type: ActionTypes.CHANGE_DATE, dateType: value, val: date });
        }
    }
}
export default connect(mapCalendarStateToProps, mapCalendarDispatchToProps)(CalendarComponent);