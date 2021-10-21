import { InferActionsTypes } from "../store";

let initialState = {}


type ActionTypes = InferActionsTypes<typeof actionsProfile>

const profileReducer = (state = initialState, action: ActionTypes) => {
	switch (action.type) {
		default:
			return state
	}
}

export const actionsProfile = {}

export default profileReducer;