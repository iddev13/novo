import { getStorageToken } from "./auth-reducer";

const SET_MESSAGES = 'novo/dialog/SET_MESSAGES';

let initialState = {
	token: getStorageToken() || false,
	messages: [],
}

const dialogReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MESSAGES:
			return {
				...state,
				messages: [...action.messages]
			}
		default: return state;
	}
}

const dialogSetMessages = (messages) => {
	return {
		type: SET_MESSAGES,
		messages
	}
}

export const DialogTC = (formData, request) => {
	return async (dispatch) => {
		console.log('DialogTC');
		try {
			const data = await request('/api/message/add', 'POST', { ...formData }, { Authorization: `Bearer ${initialState.token}` });
		} catch (error) {
			console.log(error);
		}
	}
}

export const GetMessageTC = (request) => {
	return async (dispatch) => {
		console.log('GetMessageTC', initialState.token);
		try {
			const data = await request('/api/message', 'GET', null, { Authorization: `Bearer ${initialState.token}` });
			console.log(data);
			dispatch(dialogSetMessages(data))
		} catch (error) {
			console.log(error);
		}
	}
}

export default dialogReducer;