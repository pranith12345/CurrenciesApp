import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import { mapStateToProps, mapDispatchToProps } from './mapStateToProps';
import { Line } from 'react-chartjs-2';

class ChartComponent extends Component {
    componentDidMount() {
        this.props.LoadCurrencies()
        console.log(this.props.datasetInput)

        
    }
    render() {

        if (this.props.DataLoading) {
            return (<h3>Chart Loading</h3>)
        }
        else {
            if (this.props.datasetInput == undefined) {
                return (<h3>No data for the Selected Range</h3>)
            }
            return (
                <Line data={this.props.datasetInput}></Line>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartComponent)