import React from 'react';
import { Link } from 'react-router';
import { getCategories } from '../../../actions/category.act';
import { changeCategoriesFilter } from '../../../actions/filters.act';
import { isCategoryChecked } from '../../../services/categories.srv';
import { connect }            from 'react-redux';
import { routeActions } from 'react-router-redux';

class CategoryList extends React.Component {

    constructor() {
        super();
        this.render = this.render.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.props.getCategories();
    } 

	_onCategoryClick(categorySlug, e) {
		this.props.changeCategoriesFilter(categorySlug);
	}

    render() {
    	let categories = this.props.categories;

		if (!categories || !categories.size) {
			return (
				<div>Loading categories...</div>
			);
		}

		let html = [];

	    categories.forEach((category) => {

			let isChecked = isCategoryChecked(category, this.props.selectedCategoriesFilter);

	        html.push(
				<div className="checkbox" key={category.get('_id')} >
	  				<label>
	  					<input type="checkbox"
							checked={isChecked}
							onChange={this._onCategoryClick.bind(this, category.get('slug'))} />

						{category.get('title')}
	  				</label>
	  			</div>
	        );
	    });

        return (
	        <form>
	            {html}
			</form>
        );
    }

}

function mapStateToProps(state) {
	return {
	    categories: state.getIn(['categories', 'categories']),
	    selectedCategoriesFilter: state.getIn(['filters', 'selectedCategoriesFilter'])
	}
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(getCategories()),
    changeCategoriesFilter: (categorySlug) => dispatch(changeCategoriesFilter(categorySlug)),
	dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
