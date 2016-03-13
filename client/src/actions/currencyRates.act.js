import apiService from '../services/api.srv'

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

export function getCurrencyRates(currency) {
  return function (dispatch, getState) {
    if (!shouldGetCurrencyRates(getState(), currency)) {
      return;
    }

    dispatch(requestGetCurrencyRates(currency));

    // const apiKey = '395aee9237bbb4d315163e6f3a6e5632';
    // const url = `http://apilayer.net/api/live?access_key=${apiKey}&source=GBP&currencies=USD,AUD,CAD,PLN,MXN&format=1`;
    // const url = `http://apilayer.net/api/live?access_key=${apiKey}&source=GBP`;
    // const url = `http://api.fixer.io/latest?base=USD`;
    const url = `http://api.fixer.io/latest?base=${currency}`;

    return apiService.get(url)
        .then(json => dispatch(responseGetCurrencyRates(currency, json)))
        .catch((error) => {
            console.log(error);
            dispatch(responseGetCurrencyRatesError(error))
        });
  }
}

function requestGetCurrencyRates() {
  return {
    type: 'REQUEST_GET_CURRENCY_RATES'
  }
}

function responseGetCurrencyRates(currency, currencyRates) {
  return {
    type: 'RESPONSE_GET_CURRENCY_RATES',
    currency,
    currencyRates
  }
}

function responseGetCurrencyRatesError(error) {
  return {
    type: 'RESPONSE_GET_CURRENCY_RATES_ERROR',
    error
  }
}

function shouldGetCurrencyRates(state, currency) {
    
    // const fetchedCurrencies = state.getIn(['fetchedCurrencies']).toJS();
    
    // if (fetchedCurrencies.indexOf(currency) > -1) {
    //     return false;
    // }

    return true;
}