import { AppStateType } from "../store"

export const getNovodbCars = (state: AppStateType) => {
	return state.homeFilter.cars
}

export const getFilterNames = (state: AppStateType) => {
	return state.homeFilter.filterNames
}

export const getFilterItemsTypes = (state: AppStateType) => {
	return state.homeFilter.itemType
}

export const getFilterItemsBrands = (state: AppStateType) => {
	return state.homeFilter.itemBrand
}
