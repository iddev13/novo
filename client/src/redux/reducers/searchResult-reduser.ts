
import { getStorageToken } from "./auth-reducer";

const SET_ITEM = 'novo/searchResult/SET_ITEM';

type initialStateType = {
	token: () => void | Boolean,
	items: Array<{} | null>,
}

let initialState: initialStateType = {
	token: getStorageToken() || false,
	items: [],
}

const searchResultReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_ITEM:
			return {
				...state,
				items: [...action.data]
			}

		default: return state;
	}
}

type SetItemType = {
	type: typeof SET_ITEM
	data: {}
}

const setItem = (data: {}): SetItemType => {
	return {
		type: SET_ITEM,
		data
	}
}

export const getItemsTC = (request: any) => {

	return async (dispatch: any) => {
		try {
			const data = await request('/api/item', 'GET', null, { Authorization: `Bearer ${initialState.token}` });
			dispatch(setItem(data))
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}
}

export default searchResultReducer