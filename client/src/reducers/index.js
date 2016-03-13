import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import routeReducer from './routeReducer';
import currencyRatesReducer from './currencyRates.rdc';

let reducers = Object.assign({}, {
  routing: routeReducer,
  currencyRates: currencyRatesReducer
});

const appReducer = combineReducers(reducers);

export default appReducer;
