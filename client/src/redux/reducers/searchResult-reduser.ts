

import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "../store";
import { getStorageToken } from "./auth-reducer";

const SET_ITEM = 'novo/searchResult/SET_ITEM'
const REMOVE_SORT_VALUE = 'novo/searchResult/REMOVE_SORT_VALUE'
const SET_SORT_ITEM = 'novo/searchResult/SET_SORT_ITEM'
const REMOVE_SORT_ITEMS = 'novo/searchResult/REMOVE_SORT_ITEMS'
const REMOVE_ALL_SORT_ITEMS = 'novo/searchResult/REMOVE_ALL_SORT_ITEMS'
const ON_CHANGE_CHECKBOX = 'novo/searchResult/ON_CHANGE_CHECKBOX'

type initialStateType = {
	token: () => void | Boolean
	items: Array<{} | null>
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
	sortItems: [
		{ category: "country", key1: "страна", value1: "германия" },
		{ category: "country", key1: "категория", value1: "япония" },
	]
}

type ActionsTypes = InferActionsTypes<typeof actionsSearchResult>

const searchResultReducer = (state = initialState, action: ActionsTypes) => {
	switch (action.type) {
		case SET_ITEM:
			return {
				...state,
				items: [...action.data]
			}
		case REMOVE_SORT_VALUE:
			// console.log(action.categoryName);
			let newS = state.sortItems.filter((elem: any) => elem.key1 !== action.value)
			return {
				...state,
				sortItems: newS
			}
		case SET_SORT_ITEM:
			// console.log(action.category, action.sortData, action.sortName);
			let newSortItem = { category: action.category, key1: action.sortName, value1: action.sortData, checked: true }
			return {
				...state,
				sortItems: [...state.sortItems, newSortItem]
			}
		case REMOVE_SORT_ITEMS:
			console.log('REMOVE_SORT_ITEMS: ', action);
			let newSortItemsList = state.sortItems.filter((elem: any) => elem.value1 !== action.value)
			return {
				...state,
				sortItems: newSortItemsList,
				items: state.items.map((elem: any) => {
					if (elem.brand === action.value && elem.checked === false) {
						return { ...elem, checked: false }
					} else {
						return { ...elem }
					}
				})
			}
		case REMOVE_ALL_SORT_ITEMS:
			return {
				...state,
				items: state.items.map((elem: any) => {
					return { ...elem, checked: false }
				}),
				sortItems: []
			}
		case ON_CHANGE_CHECKBOX:
			console.log('reducer', action.category, action.value);
			return {
				...state,
				items: state.items.map((elem: any) => {
					if (elem[action.category] === action.value && elem.checked === false) {
						console.log(elem);

						return { ...elem, checked: true }
					}
					if (elem[action.category] === action.value && elem.checked === true) {
						return { ...elem, checked: false }
					}
					else { return { ...elem } }
				})
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
	onChangeCheckbox: (category: string, value: string) => {
		return { type: ON_CHANGE_CHECKBOX, category, value } as const
	}
}

export const getItemsTC = (request: any): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
	return async (dispatch) => {
		try {
			const data = await request('/api/item', 'GET', null, { Authorization: `Bearer ${initialState.token}` });
			data.forEach((elem: any) => elem.checked = false);
			dispatch(actionsSearchResult.setItem(data))
		} catch (error) {
			console.log(error);
		}
	}
}

export default searchResultReducer