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
    "base": "USD",
    "startDate": moment().subtract(30, 'days').format("YYYY-MM-DD"),
    "endDate": moment().format("YYYY-MM-DD"),
    datasetInput: {}
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
