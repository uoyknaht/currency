// TODO

//  kad place edit url refresh butu galima daryti
// cancel mygtuka place edit formoj ir tada revertint visus changus
// on place list load, zoom google map and pan it to cover all markers
// set coordinates from address
// - sortinti categories list in place view in js. - place.categories db yra ne List(), reikia perdaryti. Immutable ordered list?
// - issaugoti i state place lista pagal ivairu filtravima kad nedaryt tokiu paciu requestu
// - // TODO: places can receive new category, but in place list this wont be reflected
// suvienodint visur kad latlng naudotu

// check:
// GraphQL
// Relay
// - normalizr
// - rxjs
// - console asieskot geresne,kaip padaryt kad ji automatiskai dir atidarytu
// - atom susikonfiginti

// read:
// https://blog.risingstack.com/react-js-best-practices-for-2016/
// http://www.sitepoint.com/how-to-build-a-todo-app-using-react-redux-and-immutable-js/
// http://facebook.github.io/react/docs/update.html
// http://requirebin.com/?gist=643dbb03eaeeb51f5791

// watch:
// https://www.youtube.com/watch?v=I7IdS-PbEgI

// immutable js
    // https://github.com/facebook/immutable-js/wiki

    // add to array
    // state = state.update('todos', (todos) =>
    //   todos.push(item)
    // );

    // Convert a JS object into an Immutable object:
    // const state = Immutable.fromJS({
    //   todos: [{
    //     text: 'Initial Todo', isCompleted: false
    //   }],
    //   toggleAllCompleted: true
    // });

    // Set a property on an Immutable object:
    // state.set('toggleAllCompleted', false);

    // Set a nested property on an Immutable object:
    // state.updateIn(['todos', 0, 'isCompleted'], true);

    // Push to a list inside an Immutable object:
    // const item = Immutable.fromJS({ text: 'New Item', isCompleted: false });
    // state.update('todos', todos => todos.push(item));


    // handleAddItemClick() {
    //   this.setState(({data}) => ({
    //     data: data.update('items', list => list.push(data.get('count')))
    //   }));
    // },

    // Map over a list inside an Immutable object and update all items (this will toggle all todo items isCompleted property):
    // state.update('todos', (todos) =>
    //   todos.map((todo) => todo.set('isCompleted', true)));

    // list = list.update(
    //   list.findIndex(function(item) {
    //     return item.get("name") === "third";
    //   }), function(item) {
    //     return item.set("count", 4);
    //   }
    // );

    // Filter a list inside an Immutable object and update the list:
    // (This will filter all Todos that are not completed and update the list)

    // state.update('todos', (todos) =>
    //   todos.filter((todo) => !todo.get('isCompleted')));

    // Remove an item from a list inside an Immutable object:
    // state.deleteIn(['todos', 0]);


// immutable helpers

    // var update = require('react-addons-update');

    // var newData = update(myData, {
    //   x: {y: {z: {$set: 7}}},
    //   a: {b: {$push: [9]}}
    // });


// react render

    // const todosDOM = todos.map((todo, idx) => {
    //   return (
    //     <li key={idx}>
    //       <TodoItem todo={todo}/>
    //     </li>
    //   );
    // });



// import * as reducers                    from './reducers';
//  const { places } = this.props;
// Object
//   .keys(initialState)
//   .forEach(key => {
//     initialState[key] = fromJS(initialState[key]);
//    });
// const reducer = combineReducers(appReducer);

// use initial state when it's clear how to bootstrap it with immutable
// const store = createStore(appReducer, initialState, applyMiddleware(reduxRouterMiddleware, thunkMiddleware));

// const store = createStore(
//   rootReducer,
//   applyMiddleware(
//     thunkMiddleware, // lets us dispatch() functions
//     loggerMiddleware // neat middleware that logs actions
//   )
// )

// return state.merge(newState);
// return state.mergeDeep(newState);

// return fetch(`http://localhost:8081/api/places`, {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: newPlace
//     })
//     .then(response => response.json())
//     .then(json => dispatch(responseUpdatePlace(json)))
//     .catch(err => console.log(err));

// <Marker lat={59.955413} lng={30.337844} text={'A'} />
// <Marker lat={59.724465} lng={30.080121} text={'A'} />

// push to array: return [...list, itemToPush];
// https://egghead.io/lessons/javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread


// var index = mergedState.markers.
// mergedState.markers = update(state.markers, {$splice: [[index, 1]]}); // => [1, 2, 3, 4]

// https://github.com/gajus/redux-immutable-examples/blob/master/src/app/store.js

// export function next(state) {
//   const entries = state.get('entries');
//   return state.merge({
//     vote: Map({pair: entries.take(2)}),
//     entries: entries.skip(2)
//   });
// }

// export function vote(state, entry) {
//   return state.updateIn(
//     ['vote', 'tally', entry],
//     0,
//     tally => tally + 1
//   );
// }



// var stateV1 = Immutable.fromJS({
//   users: [
//     { name: 'Foo' },
//     { name: 'Bar' }
//   ]
// });

// var stateV2 = stateV1.updateIn(['users', 1], function () {
//   return Immutable.fromJS({
//     name: 'Barbar'
//   });
// });

// list = list.update(
//   list.findIndex(function(item) {
//     return item.get("name") === "third";
//   }), function(item) {
//     return item.set("count", 4);
//   }
// );

// https://developers.google.com/maps/documentation/javascript/examples/event-simple

    // const Markers = this.props.markers &&
    //   this.props.markers.filter((m, index) => index >= rowFrom && index <= rowTo)
    //   .map((marker, index) => (
    //     <MarkerExample
    //       // required props
    //       key={marker.get('id')}
    //       lat={marker.get('lat')}
    //       lng={marker.get('lng')}
    //       // any user props
    //       showBallon={index + rowFrom === this.props.openBallonIndex}
    //       onCloseClick={this._onBalloonCloseClick}
    //       hoveredAtTable={index + rowFrom === this.props.hoveredRowIndex}
    //       scale={getScale(index + rowFrom, this.props.visibleRowFirst, this.props.visibleRowLast, K_SCALE_NORMAL)}
    //       {...markerDescriptions[marker.get('type')]}
    //       marker={marker} />
    //   ));

	//   let html = categories.map((category) => {
	// 	  return (
	// 		<div className="checkbox" key={category.get('_id')} >
 //  				<label>
 //  					<input type="checkbox"
	// 					onChange={this._onCategoryClick} />
	  //
	// 				{category.get('title')}
 //  				</label>
 //  			</div>
	// 	  );
	//   });


// next:
// - on place edit begin, pan map to marker
// on marker click, open place view
// draggable marker in create place form

// mongo:
// https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
// http://www.jonahnisenson.com/schema-within-a-schema-use-embedded-documents-in-mongoosemongo/
// https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/
// http://jaketrent.com/post/mongoose-population/
// http://stackoverflow.com/questions/26156687/mongoose-find-update-subdocument
// https://docs.mongodb.org/manual/reference/operator/update/pullAll/

// 1. page load: no filter, category filter, search filter, both filters
// 2. on category click: without search filter, with it
// 3. on search filter click: without categories filter, with it
// 4. on direct route change, f.e. clicking on Places in nav
//
//
//
//

// var parts = ['shoulders', 'knees'];
// var lyrics = ['head', ...parts, 'and', 'toes'];
// console.log(lyrics)
//
// var a = {
// 	a: 1,
// 	b: 2
// }
//
// var c = {
// 	c: 3
// }
// var style= {...a, ...c}
//
// console.log(style);

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
// import { combineReducers } from 'redux-immutablejs';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux'
import appReducer                    from './reducers';
import { syncHistory, routeReducer } from 'react-router-redux'
import { fromJS }                       from 'immutable';

// import appRoutes from './routes';
import { DefaultRoute, Route, Router, browserHistory } from 'react-router';
import Immutable from 'immutable';
import App from './components/app/app.cmp';
import ExchangeForm from './components/exchangeForm/exchangeForm.cmp';

import './css/bootstrap.css';
import './css/animate.css';
import './css/toastr.scss';
import './css/app.scss';

const reduxRouterMiddleware = syncHistory(browserHistory);

let initialState = Immutable.fromJS({
    //location: undefined
});

const store = createStore(appReducer, initialState, applyMiddleware(reduxRouterMiddleware, thunkMiddleware));

// Required for replaying actions from devtools to work
// reduxRouterMiddleware.listenForReplays(store);

// reduxRouterMiddleware.listenForReplays(store, (state) => {
//     return state.getIn(['route', 'location']).toJS();
// });

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/convert" component={ExchangeForm}></Route>
        <Route path="/convert/:currencies" component={ExchangeForm}></Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
