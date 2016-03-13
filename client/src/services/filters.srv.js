
export function getPlaceListFilterQuery(categoriesFilter, searchFilter) {

    let query = '';
    let categoriesQuery = getQueryFromFilter(categoriesFilter);

    if (categoriesQuery) {
        query += 'categories=' + categoriesQuery;
    }

    if (searchFilter) {
        if (categoriesQuery) {
            query += '&';
        }

        query += 'search=' + searchFilter;
    }

    if (query) {
        query = '?' + query;
    }

    return query;

}

export function getFilterFromQuery(query) {
	if (!query) {
		return [];
	}

    return query.split(',');
}

function getQueryFromFilter(filter) {
    if (!filter || !filter.size) {
        return '';
    }

    return filter.toJS().join(',');
}


function isCategoriesFilterEmpty(categoriesFilter) {
    return categoriesFilter.size === 0;
}
