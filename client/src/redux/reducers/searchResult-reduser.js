import { getStorageToken } from "./auth-reducer";

const SET_ITEM = 'novo/searchResult/SET_ITEM';

let initialState = {
	token: getStorageToken() || false,
	items: [],
}

const searchResultReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ITEM:
			return {
				...state,
				items: [...action.data]
			}

		default: return state;
	}
}

const setItem = (data) => {
	return {
		type: SET_ITEM,
		data
	}
}

export const getItemsTC = (request) => {

	return async (dispatch) => {
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