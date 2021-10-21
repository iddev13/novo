import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "../store";
import { getStorageToken } from "./auth-reducer";

type InitialStateType = {
	token: () => void | boolean
}

let initialState: InitialStateType = {
	token: getStorageToken() || false,
}

type ActionTypes = InferActionsTypes<typeof actionsUser>

const userReducer = (state = initialState, action: ActionTypes) => {
	switch (action.type) {
		default: return state;
	}
}

export const actionsUser = {}
export type NewAddDataType = {
	category: string,
	year: number,
	brand: string,
	km: number,
	model: string,
	country: string,
	price: number,
	weight: number,
	imageSrc: string,
	description: string,
}

export const pushAdTC = (formData: NewAddDataType, request: any): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
	return async (dispatch) => {
		console.log('DialogTC');
		try {
			const data = await request('/api/item/add', 'POST', { ...formData }, { Authorization: `Bearer ${initialState.token}` });
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}
}

export default userReducer;