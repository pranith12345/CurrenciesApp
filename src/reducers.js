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
            return newState1;
        case ActionTypes.CURRENCIES_LOADING:
            newState = { ...state, dataLoading: true }
            return newState;
        default:
            return state;
    };
}
const reducers = CurrencyReducers;
export default reducers;