import { AppStateType } from './../store';

export const getItemSearchResult = (state: AppStateType) => {
	return state.searchResult.items
}

export const getSortItemsSearchResult = (state: AppStateType) => {
	return state.searchResult.sortItems
}

export const getFilterItems = (state: AppStateType) => {
	return state.searchResult.filterItems
}

export const getFilterItemsTypes = (state: AppStateType) => {
	return state.searchResult.itemType
}

export const getFilterItemsBrands = (state: AppStateType) => {
	return state.searchResult.itemBrand
}