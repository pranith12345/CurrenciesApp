import ActionTypes from './ActionTypes';
export const mapStateToProps = function (state) {
    return {
        datasetInput: state.datasetInput,
        DataLoading: state.dataLoading,
        startDate: state.startDate,
        endDate: state.endDate,
        baseCurrency: state.baseCurrency,
        currencies: state.currencies,
        availableCurrencies: state.availableCurrencies
    };
};
export const mapDispatchToProps = function (dispatch) {
    return {
        LoadCurrencies: () => {
            dispatch(LoadCurrenciesThunk())
        },
        ChangeDate: (value, date) => {
            dispatch({ type: ActionTypes.CHANGE_DATE, dateType: value, val: date });
        },
        AddCurrencies: (name, isChecked) => {
            dispatch({ type: ActionTypes.ADD_CURRENCIES, currency: name, isCurrencyChecked: isChecked })
        },
        SetBaseCurrency: (name) => { dispatch({ type: ActionTypes.SET_BASECURRENCY, currency: name }) }

    };
};
function LoadCurrenciesThunk() {
    return (dispatch, getState) => {
        var state = getState();
        LoadCurrenciesFromAPI(state, dispatch);
    }
}
var LoadDatasetforChart = (apiResponse) => {

    var dateLabels = []
    var datasets1 = []
    Object.keys(apiResponse).sort().forEach((s, i) => {
        dateLabels.push(s);
        if (i == 0) {
            Object.keys(apiResponse[s]).forEach(key => {
                datasets1.push({
                    data: [],
                    label: key,
                    borderColor: '#'+Math.random().toString(16).substr(-6),
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
        labels: dateLabels,
        datasets: datasets1
    }
}
function LoadCurrenciesFromAPI(state, dispatch) {
    dispatch({ type: ActionTypes.CURRENCIES_LOADING })
    var currencies = state.currencies.length === 0 ? "INR" : state.currencies.join(",")
    var api = `https://api.exchangeratesapi.io/history?start_at=${state.startDate}&end_at=${state.endDate}&symbols=${currencies}&base=${state.baseCurrency}`;
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

