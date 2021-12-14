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
const ON_CHANGE_CHECKBOX_ITEM_VALUE = 'novo/searchResult/ON_CHANGE_CHECKBOX_ITEM_VALUE'

let dataBaseItems: any = []

type ItemTypeType = {
	id: number
	name: string
	checked: boolean
}

type ItemBrandType = {
	id: number
	name: string
	checked: boolean
}

type DisabledObjType = {
	name: string
}

type initialStateType = {
	token: () => void | Boolean
	items: Array<{} | null>
	filterItems: any
	sortItems: Array<SortItemsType | null>
	itemCategories: {
		carrying: Array<ItemTypeType>
		brand: Array<ItemBrandType>
	}
	// itemType: Array<ItemTypeType>
	// itemBrand: Array<ItemBrandType>
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
		// { category: "country", key1: "страна", value1: "германия" },
		// { category: "country", key1: "категория", value1: "япония" },
	],
	itemCategories: {
		carrying: [
			{ id: 1, name: 'легковые', checked: false },
			{ id: 2, name: 'грузовые', checked: false }
		],
		brand: [
			{ id: 1, name: 'bmw', checked: false },
			{ id: 2, name: 'opel', checked: false },
			{ id: 3, name: 'nissan', checked: false },
		]
	}
	// itemType: [
	// 	{ id: 1, name: 'легковые', checked: false },
	// 	{ id: 2, name: 'грузовые', checked: false }
	// ],
	// itemBrand: [
	// 	{ id: 1, name: 'bmw', checked: false },
	// 	{ id: 2, name: 'opel', checked: false },
	// 	{ id: 3, name: 'nissan', checked: false },
	// ]
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

			let newSortItem = { category: action.category, key1: action.sortName, value1: action.sortData, checked: action.checked }
			return {
				...state,
				sortItems: [...state.sortItems, newSortItem]
			}
		case REMOVE_SORT_ITEMS:

			let newSortItemsList = state.sortItems.filter((elem: any) => elem.value1 !== action.value)
			return {
				...state,
				sortItems: newSortItemsList
			}
		case REMOVE_ALL_SORT_ITEMS:
			return {
				...state,
				items: state.items.map((elem: any) => {
					return { ...elem, checked: false }
				}),
				sortItems: [],
				itemBrand: state.itemCategories.brand.map((elem: any) => {
					return { ...elem, checked: false }
				})
			}


		// Sort items ===========================
		case SET_FILTER_ITEM:

			if (action.name === 'carrying') {

				let a = Object.values(state.itemCategories.carrying)
				let count = 0

				a.forEach((elem: any) => {
					if (elem.checked) count++
				})

				let newSortData = dataBaseItems.filter((elem: any) => {
					for (let key of a) {
						if (key.checked && elem.category === key.name) {
							count++
							return elem
						}
						if (count === 0) { return elem }
					}
				})
				return {
					...state,
					items: newSortData
				}
			}

			if (action.name === 'brand') {
				let a = Object.values(state.itemCategories.brand)
				let count = 0

				a.forEach((elem) => {
					if (elem.checked) count++
				})

				let newSortData = dataBaseItems.filter((elem: any) => {
					for (let key of a) {
						if (key.checked && elem.brand === key.name) {
							count++
							return elem
						}
						if (count === 0) { return elem }
					}
				})
				return { ...state, items: newSortData }
			}


			return { ...state }
		case GET_FILTER_CATEGORY_NAMES:
			const allFilterCategories = { category: Array.from(new Set(action.data.map((item: any) => item.category))) }
			return {
				...state,
				filterItems: [...state.filterItems, allFilterCategories]
			}
		case GET_FILTER_BRAND_NAMES:
			const allFilterBrands = { brand: Array.from(new Set(action.data.map((item: any) => item.brand))) }
			return {
				...state,
				filterItems: [...state.filterItems, allFilterBrands]
			}
		case ON_CHANGE_CHECKBOX_ITEM_VALUE:
			let newObj: any = {}
			let count = 0

			for (let key in state.itemCategories) {
				let categoriesItem = Object.values(state.itemCategories)[count]

				let newItems = categoriesItem.map((elem: any) => {
					if (elem.checked === false && elem.name === action.name) {
						return { ...elem, checked: true }
					}
					else if (elem.checked === true && elem.name === action.name) {
						return { ...elem, checked: false }
					}
					return elem
				})

				newObj[key] = newItems
				count++
			}

			return {
				...state,
				itemCategories: newObj
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
	setSortItem: (category: string, sortName: string, sortData: string | number, checked: boolean) => {
		return { type: SET_SORT_ITEM, category, sortName, sortData, checked } as const
	},
	removeSortItem: (category: string, value: string, checked: boolean) => {
		return { type: REMOVE_SORT_ITEMS, category, value, checked } as const
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
	},
	onChangeItemChecked: (category: string, name: string, checked: boolean) => {
		return {
			type: ON_CHANGE_CHECKBOX_ITEM_VALUE, category, name, checked
		} as const
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