import ActionTypes from './ActionTypes'

const CurrencyReducers = function (state = {}, action) {
    switch (action.type) {
        case ActionTypes.LOAD_CURRENCIES:
            var newState = {
                ...state, datasetInput: { ...action.datasetInput }, dataLoading: false
            }
            return newState;

        case ActionTypes.CHANGE_DATE:
            var newState1 = { ...state, [action.dateType]: action.val }
            return newState1
        case ActionTypes.CURRENCIES_LOADING:
            newState = { ...state, dataLoading: true }
            return newState;
        case ActionTypes.ADD_CURRENCIES:
            if (action.isCurrencyChecked)
                newState = { ...state, currencies: [...(state.currencies), action.currency] }
            else {
                newState = { ...state, currencies: [...(state.currencies)] }
                newState.currencies = newState.currencies.filter(s => s != action.currency)
            }
            return newState
        case ActionTypes.SET_BASECURRENCY:
            newState = { ...state, baseCurrency: action.currency }
            return newState
        default:
            return state;
    };
}
const reducers = CurrencyReducers;
export default reducers;