import { getStorageToken } from "./auth-reducer";

let initialState = {
	token: getStorageToken() || false,
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		default: return state;
	}
}

export const pushAdTC = (formData, request) => {
	return async (dispatch) => {
		console.log('DialogTC');
		try {
			const data = await request('/api/item/add', 'POST', { ...formData }, { Authorization: `Bearer ${initialState.token}` });
		} catch (error) {
			console.log(error);
		}
	}
}

export default userReducer;