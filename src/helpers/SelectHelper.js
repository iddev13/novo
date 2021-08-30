export const allCategoryHelpFunction = (categoryList, category) => {
	return [...new Set(categoryList.map(elem => elem[category]))];
}