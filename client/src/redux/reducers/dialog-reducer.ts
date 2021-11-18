import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "../store";
import { getStorageToken } from "./auth-reducer";

const SET_MESSAGES = 'novo/dialog/SET_MESSAGES';

export type DialogMessageType = {
	_id: string
	message: string
	owner: string
	date: string
}

type InitialStateType = {
	token: () => void | boolean
	messages: Array<DialogMessageType>,
	newMessages: number,
}

let initialState: InitialStateType = {
	token: getStorageToken() || false,
	messages: [],
	newMessages: 2,
}

type ActionsType = InferActionsTypes<typeof actionsDialog>

const dialogReducer = (state = initialState, action: ActionsType) => {
	switch (action.type) {
		case SET_MESSAGES:
			return {
				...state,
				messages: [...action.messages]
			}
		default: return state;
	}
}

export const actionsDialog = {
	dialogSetMessages: (messages: Array<DialogMessageType>) => {
		return {
			type: SET_MESSAGES,
			messages
		} as const
	}
}


export const DialogTC = (formData: { message: string }, request: any): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => {
	return async (dispatch) => {
		console.log('DialogTC');
		try {
			const data = await request('/api/message/add', 'POST', { ...formData }, { Authorization: `Bearer ${initialState.token}` });
		} catch (error) {
			console.log(error);
		}
	}
}

export const GetMessageTC = (request: any): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => {
	return async (dispatch) => {
		try {
			const data = await request('/api/message', 'GET', null, { Authorization: `Bearer ${initialState.token}` });
			console.log('GetMessageTC', data);
			dispatch(actionsDialog.dialogSetMessages(data))
		} catch (error) {
			console.log(error);
		}
	}
}

export default dialogReducer;