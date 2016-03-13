import React from 'react';
import { Link } from 'react-router';

class CategoriesTitlesList extends React.Component {

    constructor() {
        super();
        this.render = this.render.bind(this);
    }

    render() {
        let categories = this.props.categories;
        // TODO: sorting
        // categories = categories.sortBy((category, key) => {
        //     return -category.title;
        // });
        let categoriesHtml = categories.map((category, index) => {
            let key1 = this.props.placeId + '_' + category.get('_id');
            let title = category.get('title');
            
            if (index + 1 !== categories.size) {
                title += ',';
            } 

            return (
                <span key={key1}>
                    <Link 
                        to={`/places?categories=${category.get('slug')}`} >

                        {title}
                    </Link>
                    &nbsp;
                </span>
            )
        })

        return (
            <span>
                {categoriesHtml}
            </span>
        );
    }

}

export default CategoriesTitlesList;
