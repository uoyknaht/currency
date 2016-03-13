import Immutable from 'immutable';
import { UPDATE_LOCATION } from 'react-router-redux';

let initialState;

initialState = Immutable.fromJS({
    location: undefined
});

export default (state = initialState, action) => {

    switch(action.type) {

        case UPDATE_LOCATION:

            return state.merge({
                location: action.payload
            });

        case 'CLICK_MARKER':


                // TODO: handle route here or create a prop "clickedMarker" to be handled in components
                console.log('CLICK_MARKER');
            return state;

        default:

            return state;
    }

};