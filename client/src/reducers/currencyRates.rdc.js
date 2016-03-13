import Immutable from 'immutable';
import notifierService from '../services/notifier.srv';

let defaultState = Immutable.Map({
    isFetchingCurrencyRates: false,
    areCurrencyRatesFetched: false,
    currencyRates: Immutable.fromJS({
        'EUR': {"base":"EUR","date":"2016-03-11","rates":{"AUD":1.4766,"BGN":1.9558,"BRL":4.0401,"CAD":1.4698,"CHF":1.0948,"CNY":7.2119,"CZK":27.059,"DKK":7.4598,"GBP":0.77595,"HKD":8.6069,"HRK":7.5745,"HUF":310.28,"IDR":14484.63,"ILS":4.3022,"INR":74.317,"JPY":126.17,"KRW":1319.89,"MXN":19.6852,           "MYR":4.5331,"NOK":9.436,"NZD":1.6578,"PHP":51.565,"PLN":4.3099,"RON":4.4669,"RUB":77.459,"SEK":9.309,"SGD":1.5271,"THB":38.937,"TRY":3.1888,"USD":1.109,"ZAR":16.9023}},
        
        'USD': {"base":"USD","date":"2016-03-11","rates":{"AUD":1.3315,"BGN":1.7636,"BRL":3.643,"CAD":1.3253,"CHF":0.9872,"CNY":6.5031,"CZK":24.399,"DKK":6.7266,"GBP":0.69968,"HKD":7.761,"HRK":6.83,"HUF":279.78,"IDR":13061.0,"ILS":3.8794,"INR":67.013,"JPY":113.77,"KRW":1190.2,"MXN":17.75,                   "MYR":4.0876,"NOK":8.5086,"NZD":1.4949,"PHP":46.497,"PLN":3.8863,"RON":4.0279,"RUB":69.846,"SEK":8.394,"SGD":1.377,"THB":35.11,"TRY":2.8754,"ZAR":15.241,"EUR":0.90171}}
    }),
    fetchedCurrencies: Immutable.List(),
    rateOfActiveCurrenciesPair: null
});

export default function currencyRatesReducer(state = defaultState, action) {

    let newState;
    let categories;
	let index;
	let slugs;

    switch(action.type) {

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

        case 'REQUEST_GET_CURRENCY_RATES':

            return state.set('isFetchingCurrencyRates', true);

        case 'RESPONSE_GET_CURRENCY_RATES':

            newState = state.set('isFetchingCurrencyRates', false);
            newState = newState.set('areCurrencyRatesFetched', true);
            // newState = newState.setIn(['currencyRates', action.currency], Immutable.fromJS(action.currencyRates));
            // newState = newState.update('fetchedCurrencies', fetchedCurrencies => fetchedCurrencies.push(currency));

            return newState;

        case 'RESPONSE_GET_CURRENCY_RATES_ERROR':

            notifierService.error('error RESPONSE_GET_CATEGORIES_ERROR');

            return state.set('isFetchingCurrencyRates', false);

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

        default:
            return state;
    }

}
