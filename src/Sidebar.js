import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import CalendarComponent from './CalendarComponent';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './mapStateToProps';
class Sidebar extends Component {
    render() {
        return (
            <div className="container">
                <CalendarComponent value="startDate" ></CalendarComponent>
                <CalendarComponent value="endDate" ></CalendarComponent>
                <br />
                <div className="container">
                    <div className="form-inline">
                        <button className="btn btn-primary" onClick={() => this.props.LoadCurrencies()}>Load</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);