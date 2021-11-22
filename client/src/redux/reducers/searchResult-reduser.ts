import { actionsHomeFilter } from './homeFilter-reducer';
import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "../store";
import { getStorageToken } from "./auth-reducer";

const SET_ITEM = 'novo/searchResult/SET_ITEM'
const REMOVE_SORT_VALUE = 'novo/searchResult/REMOVE_SORT_VALUE'
const SET_SORT_ITEM = 'novo/searchResult/SET_SORT_ITEM'
const REMOVE_SORT_ITEMS = 'novo/searchResult/REMOVE_SORT_ITEMS'
const REMOVE_ALL_SORT_ITEMS = 'novo/searchResult/REMOVE_ALL_SORT_ITEMS'
const SET_FILTER_ITEM = 'novo/searchResult/SET_FILTER_ITEM'
const GET_FILTER_CATEGORY_NAMES = 'novo/searchResult/GET_FILTER_CATEGORY_NAMES'
const GET_FILTER_BRAND_NAMES = 'novo/searchResult/GET_FILTER_BRAND_NAMES'

let dataBaseItems: any = []

type initialStateType = {
	token: () => void | Boolean
	items: Array<{} | null>
	filterItems: any
	sortItems: Array<SortItemsType | null>
}

export type SortItemsType = {
	category: string
	key1: string | null
	value1: string | number | null
	value2?: string | number | null
	checked?: boolean
}



let initialState: initialStateType = {
	token: getStorageToken() || false,
	items: [],
	filterItems: [],
	sortItems: [
		{ category: "country", key1: "страна", value1: "германия" },
		{ category: "country", key1: "категория", value1: "япония" },
	]
}

type ActionsTypes = InferActionsTypes<typeof actionsSearchResult>

const searchResultReducer = (state = initialState, action: ActionsTypes) => {
	switch (action.type) {
		case SET_ITEM:
			dataBaseItems = action.data
			return {
				...state,
				items: [...dataBaseItems]
			}
		case REMOVE_SORT_VALUE:
			let newS = state.sortItems.filter((elem: any) => elem.key1 !== action.value)
			return {
				...state,
				sortItems: newS
			}
		case SET_SORT_ITEM:
			let newSortItem = { category: action.category, key1: action.sortName, value1: action.sortData, checked: true }
			return {
				...state,
				sortItems: [...state.sortItems, newSortItem]
			}
		case REMOVE_SORT_ITEMS:
			console.log('remove_sort_items', action);
			console.log('remove_sort_items', state.filterItems);

			let newSortItemsList = state.sortItems.filter((elem: any) => elem.value1 !== action.value)
			return {
				...state,
				sortItems: newSortItemsList,
				// items: state.items.map((elem: any) => {
				// 	if (elem.brand === action.value && elem.checked === false) {
				// 		return { ...elem, checked: false }
				// 	} else {
				// 		return { ...elem }
				// 	}
				// })
			}
		case REMOVE_ALL_SORT_ITEMS:
			return {
				...state,
				items: state.items.map((elem: any) => {
					return { ...elem, checked: false }
				}),
				sortItems: []
			}


		// Sort items ===========================
		case SET_FILTER_ITEM:
			let newSortData = dataBaseItems.filter((elem: any) => {
				if (action.checked) {
					if (elem[action.name] === action.category) { return elem }
				} else {
					return elem
				}
			})
			return {
				...state,
				items: newSortData
			}
		case GET_FILTER_CATEGORY_NAMES:
			// console.log('GET_FILTER_CATEGORY_NAMES: ', action.data);
			const allFilterCategories = { category: Array.from(new Set(action.data.map((item: any) => item.category))) }
			return {
				...state,
				filterItems: [...state.filterItems, allFilterCategories]
			}
		case GET_FILTER_BRAND_NAMES:
			// console.log('GET_FILTER_BRAND_NAMES: ', action.data);
			const allFilterBrands = { brand: Array.from(new Set(action.data.map((item: any) => item.brand))) }
			console.log(allFilterBrands);

			return {
				...state,
				filterItems: [...state.filterItems, allFilterBrands]
			}
		default: return state;
	}
}

export const actionsSearchResult = {
	setItem: (data: Array<string | number>) => {
		return { type: SET_ITEM, data } as const
	},
	removeSortValue: (value: string | number) => {
		return { type: REMOVE_SORT_VALUE, value } as const
	},
	setSortItem: (category: string, sortName: string, sortData: string | number) => {
		return { type: SET_SORT_ITEM, category, sortName, sortData } as const
	},
	removeSortItem: (category: string, value: string) => {
		return { type: REMOVE_SORT_ITEMS, category, value } as const
	},
	removeAllSortItems: () => {
		return { type: REMOVE_ALL_SORT_ITEMS } as const
	},
	setFilterItems: (name: string, category: string, checked: boolean) => {
		return { type: SET_FILTER_ITEM, name, category, checked } as const
	},
	setFilterCategoryTC: (data: any) => {
		return { type: GET_FILTER_CATEGORY_NAMES, data } as const
	},
	setFilterBrandTC: (data: any) => {
		return { type: GET_FILTER_BRAND_NAMES, data } as const
	}
}

export const getItemsTC = (request: any): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
	return async (dispatch) => {
		try {
			const data = await request('/api/item', 'GET', null, { Authorization: `Bearer ${initialState.token}` });
			data.forEach((elem: any) => elem.checked = false);
			dispatch(actionsSearchResult.setItem(data))
			dispatch(actionsSearchResult.setFilterCategoryTC(data))
			dispatch(actionsSearchResult.setFilterBrandTC(data))
		} catch (error) {
			console.log(error);
		}
	}
}

export default searchResultReducer