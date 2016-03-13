import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import { connect }            from 'react-redux';
import { routeActions } from 'react-router-redux';
import { getCurrencyRates } from '../../actions/currencyRates.act'

class ExchangeForm extends React.Component {

    constructor() {
        super();
        
        this.componentWillMount = this.componentWillMount.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this._setCurrenciesFromRouteString = this._setCurrenciesFromRouteString.bind(this)
        this._onBaseCurrencyChange = this._onBaseCurrencyChange.bind(this)
        this._onCalcCurrencyChange = this._onCalcCurrencyChange.bind(this)
        this._onSwitchClick = this._onSwitchClick.bind(this)
        
        this.state = {
            baseCurrency: null,
            calcCurrency: null,
            rate: null
        }
    }

    componentWillMount() {
        // this.props.getCurrencyRates('USD');
        this._setCurrenciesFromRouteString(this.props.currencies)
    }

    componentDidMount() {
        this._onBaseCurrencyChange()
    }


     componentWillReceiveProps(newProps) {
         if (newProps.currencies !== this.props.currencies) {
             this._setCurrenciesFromRouteString(newProps.currencies)
             this._onBaseCurrencyChange()
         }
	}
    
    _setCurrenciesFromRouteString(routeString) {
        const baseCurrency = routeString.substring(0, 3).toUpperCase()
        console.log(baseCurrency)
        const calcCurrency = routeString.substring(4, 7).toUpperCase()
        const rate = this.props.currencyRates.getIn([baseCurrency, 'rates', calcCurrency]);

        this.setState({
            baseCurrency,
            calcCurrency,
            rate
        })        
    }
    
    _onBaseCurrencyChange() {
        let baseValue = ReactDOM.findDOMNode(this.refs.baseCurrency).value;
        console.log(this.state.rate);
        let calcValue = baseValue * this.state.rate;
        
        ReactDOM.findDOMNode(this.refs.calcCurrency).value = calcValue;
    }
    
    _onCalcCurrencyChange() {
        let calcValue = ReactDOM.findDOMNode(this.refs.calcCurrency).value;
        let baseValue = calcValue / this.state.rate;
        
        ReactDOM.findDOMNode(this.refs.baseCurrency).value = baseValue;        
    }
    
    _onSwitchClick() {
        
    }

    render() {
        
        function capitalizeFirstLetter(string) {
            string = string.toLowerCase()
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        
        const reverseUrl = `/convert/${this.state.calcCurrency.toLowerCase()}:${this.state.baseCurrency.toLowerCase()}`      
        
        
        
        let baseCurrencyText = '';
        let calcCurrencyText = '';
        
        if (this.state.baseCurrency) {
            baseCurrencyText = capitalizeFirstLetter(this.state.baseCurrency);
            calcCurrencyText = capitalizeFirstLetter(this.state.calcCurrency);            
        }
        
        return (
        <div className="container-fluid cr-main-form">
            <div className="row">

                <div className="col-sm-5">
                    <input type="text" 
                           className="cr-main-input form-control" 
                           ref="baseCurrency"
                           defaultValue="1"
                           onChange={this._onBaseCurrencyChange} />
                    <div>{baseCurrencyText}</div>
                </div>
                <div className="col-sm-2 cr-equal">
                    <div>=</div>

                    <Link to={reverseUrl}
                          className="btn btn-default">
                        Switch
                    </Link>
                </div>
                <div className="col-sm-5">
                    <input type="text" 
                           className="cr-main-input form-control" 
                           ref="calcCurrency"
                           onChange={this._onCalcCurrencyChange} />
                    <div>{calcCurrencyText}</div>
                </div>

            </div>
        </div>
        );
    }

}

function mapStateToProps(state, ownProps) {
    return {
        // currencies: state.getIn(['places', 'itemInEditMode']),
        currencies: ownProps.params.currencies,
        currencyRates: state.getIn(['currencyRates', 'currencyRates'])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrencyRates: (currency) => dispatch(getCurrencyRates(currency)),
    // setActiveCurrenciesPairRate: (currency) => dispatch(setActiveCurrenciesPairRate(currency)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeForm);
