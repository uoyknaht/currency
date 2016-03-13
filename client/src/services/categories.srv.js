
export function isCategoryChecked(category, categoriesFilter) {

    let index = categoriesFilter.findIndex(categorySlug => {
        return categorySlug === category.get('slug');
    });

    return index > -1;
}
