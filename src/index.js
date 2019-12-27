import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'
import Currencies from './Currencies';
import moment from 'moment';
import thunk from 'redux-thunk';


var initialState = {
    dataLoading: false,
    "startDate": moment().subtract(30, 'days').format("YYYY-MM-DD"),
    "endDate": moment().format("YYYY-MM-DD"),
    datasetInput: {},
    baseCurrency: "USD",
    currencies: [],
    availableCurrencies: ["CAD","HKD","ISK","PHP","DKK","HUF","CZK","GBP","RON","SEK","IDR","INR","BRL","RUB","HRK","JPY","THB","CHF","EUR","MYR","BGN","TRY","CNY","NOK","NZD","ZAR","USD","MXN","SGD","AUD","ILS","KRW","PLN"]
}
const store = createStore(reducers, initialState, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Currencies></Currencies>
    </Provider >,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
