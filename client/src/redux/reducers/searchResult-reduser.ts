
import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "../store";
import { getStorageToken } from "./auth-reducer";

const SET_ITEM = 'novo/searchResult/SET_ITEM';
const SET_SORT_ITEM = 'novo/searchResult/SET_SORT_ITEM';
const REMOVE_SORT_ITEMS = 'novo/searchResult/REMOVE_SORT_ITEMS';
const REMOVE_ALL_SORT_ITEMS = 'novo/searchResult/REMOVE_ALL_SORT_ITEMS';

type initialStateType = {
	token: () => void | Boolean
	items: Array<{} | null>
	// sortItems: any
	sortItems: Array<SortItemsType | null>
}

export type SortItemsType = {
	key1: string | null
	value1: string | number | null
}

let initialState: initialStateType = {
	token: getStorageToken() || false,
	items: [],
	sortItems: [
		{ key1: "страна", value1: "германия" },
		{ key1: "категория", value1: "легковые" },
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
		case SET_SORT_ITEM:
			// console.log(action.sortData, action.sortName);
			let newSortItem = { key1: action.sortName, value1: action.sortData }
			return {
				...state,
				sortItems: [...state.sortItems, newSortItem]
			}
		case REMOVE_SORT_ITEMS:
			// console.log(action.categoryName);
			let newSortItemsList = state.sortItems.filter((elem: any) => elem.key1 !== action.categoryName)
			return {
				...state,
				sortItems: newSortItemsList
			}
		case REMOVE_ALL_SORT_ITEMS:
			return {
				...state,
				sortItems: []
			}
		default: return state;
	}
}

export const actionsSearchResult = {
	setItem: (data: Array<string | number>) => {
		return { type: SET_ITEM, data } as const
	},
	setSortItem: (sortName: string, sortData: string | number) => {
		return { type: SET_SORT_ITEM, sortName, sortData } as const
	},
	removeSortItem: (categoryName: string) => {
		return { type: REMOVE_SORT_ITEMS, categoryName } as const
	},
	removeAllSortItems: () => {
		return { type: REMOVE_ALL_SORT_ITEMS } as const
	}
}

export const getItemsTC = (request: any): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
	return async (dispatch) => {
		try {
			const data = await request('/api/item', 'GET', null, { Authorization: `Bearer ${initialState.token}` });
			dispatch(actionsSearchResult.setItem(data))
			// console.log(data);
		} catch (error) {
			console.log(error);
		}
	}
}

export default searchResultReducer