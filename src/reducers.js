import ActionTypes from "./ActionTypes";

const CurrencyReducers = function(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LOAD_CURRENCIES:
      var newState = {
        ...state,
        datasetInput: { ...action.datasetInput },
        dataLoading: false
      };
      return newState;

    case ActionTypes.CHANGE_DATE:
      newState = { ...state, [action.dateType]: action.val };
      return newState;
    case ActionTypes.CURRENCIES_LOADING:
      newState = { ...state, dataLoading: true };
      return newState;
    case ActionTypes.ADD_CURRENCIES:
      newState = {
        ...state,
        availableCurrencies: [...state.availableCurrencies]
      };
      var alteredCurrencies = newState.availableCurrencies.filter(
        currency => currency.name === action.currency
      );
      alteredCurrencies[0].IsSelected = action.isCurrencyChecked;
      return newState;
    case ActionTypes.SET_BASECURRENCY:
      newState = { ...state, baseCurrency: action.currency };
      return newState;
    default:
      return state;
  }
};
const reducers = CurrencyReducers;
export default reducers;
