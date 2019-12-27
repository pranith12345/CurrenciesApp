import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './mapStateToProps';
class CurrencyTypeComponent extends Component {
    render() {
        return (
            <div className="container">
                <br />
                <div className="form-group">
                    <label htmlFor="baseCurrency">Base Currency</label>
                    <select className="form-control" name="defaultcurrency"
                        value={this.props.baseCurrency}
                        onChange={(evt) => { this.props.SetBaseCurrency(evt.target.value) }}>
                        {this.props.availableCurrencies.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="currencies">Select Currency</label>
                    <div className="container-fluid" style={{ "columns": "2 auto" }}>
                        {
                            this.props.availableCurrencies.map((currency, i) =>
                                <div key={i}>
                                    <input type="checkbox" name={currency}
                                        onChange={(evt) => { this.props.AddCurrencies(evt.target.name, evt.target.checked) }}
                                    />{currency}
                                </div>

                            )

                        }
                    </div>
                </div>
            </div >)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyTypeComponent);