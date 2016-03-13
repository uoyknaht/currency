import { routeActions } from 'react-router-redux';
import { getPlaceListFilterQuery } from './filters.srv'

export function goToPlaceView(dispatch, placeId) {
    dispatch(routeActions.push(`/places/${placeId}`));
}

export function goToPlaceList(dispatch, categoriesFilter, searchFilter) {
    let filterQuery = getPlaceListFilterQuery(categoriesFilter, searchFilter);
    dispatch(routeActions.push(`/places${filterQuery}`));
}
