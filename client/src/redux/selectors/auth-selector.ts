import { AppStateType } from "../store"

export const getAuthToken = (state: AppStateType) => {
	return state.auth.token
}

export const getAuthUserId = (state: AppStateType) => {
	return state.auth.userId
}

// export const getAuthLogin = (state: AppStateType) => {
// 	return state.auth.login
// }

// export const getAuthLogout = (state: AppStateType) => {
// 	return state.auth.logout
// }

export const getAuthIsAuthenticated = (state: AppStateType) => {
	return state.auth.isAuthenticated
}

export const getAuthIsSeller = (state: AppStateType) => {
	return state.auth.isSeller
}

export const getAuthLoginText = (state: AppStateType) => {
	return state.auth.isAuthText
}