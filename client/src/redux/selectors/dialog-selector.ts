import { AppStateType } from "../store"

export const getDialogMessages = (state: AppStateType) => {
	return state.dialog.messages
}
export const getNewMessagesAmount = (state: AppStateType) => {
	return state.dialog.newMessages
}