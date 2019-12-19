import ActionTypes from './ActionTypes';
import { connectAdvanced } from 'react-redux';
export const mapStateToProps = function (state) {
    return {
        datasetInput: state.datasetInput,
        DataLoading: state.dataLoading,
        startDate: state.startDate,
        endDate: state.endDate,
        baseCurrency: "USD",
        currencies: ["INR"]
    };
};
export const mapDispatchToProps = function (dispatch) {
    return {
        LoadCurrencies: () => {
            dispatch(LoadCurrenciesThunk())

        }
    };
};
function LoadCurrenciesThunk() {
    return (dispatch, getState) => {
        var state = getState();
        LoadCurrenciesFromAPI(state.startDate, state.endDate, dispatch);
    }
}
var LoadDatasetforChart = (apiResponse) => {

    var labels1 = []
    var datasets1 = []
    Object.keys(apiResponse).sort().forEach((s, i) => {
        labels1.push(s);
        if (i == 0) {
            Object.keys(apiResponse[s]).forEach(key => {
                datasets1.push({
                    data: [],
                    label: key,
                    borderColor: "#3e95cd",
                    fill: false
                })
            })
        }

        var arr = Object.keys(apiResponse[s]);
        for (let index = 0; index < arr.length; index++) {
            datasets1[index].data.push(apiResponse[s][arr[index]])
        }

    })

    return {
        labels: labels1,
        datasets: datasets1
    }
}
function LoadCurrenciesFromAPI(startDate, endDate, dispatch) {
    dispatch({ type: ActionTypes.CURRENCIES_LOADING })
    var api = `https://api.exchangeratesapi.io/history?start_at=${startDate}&end_at=${endDate}&symbols=INR&base=USD`;
    fetch(api)
        .then(response => {
            return (response.json());
        })
        .then((response) => {
            var result = {}
            result = LoadDatasetforChart(response.rates)
            dispatch({
                type: ActionTypes.LOAD_CURRENCIES,
                datasetInput: result
            });
        });
}

