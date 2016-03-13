import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
// import Nav from '../nav/nav.cmp';
import ExchangeForm from '../exchangeForm/exchangeForm.cmp';

export default class App extends React.Component {

    constructor() {
        super();
        this.render = this.render.bind(this);
    }

    render() {
      return (
        <div>
            {this.props.children}
            
        </div>
      )
    }

}
