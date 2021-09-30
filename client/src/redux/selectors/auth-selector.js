export const getAuthToken = (state) => {
	return state.auth.token
}

export const getAuthUserId = (state) => {
	return state.auth.userId
}

export const getAuthLogin = (state) => {
	return state.auth.login
}

export const getAuthLogout = (state) => {
	return state.auth.logout
}

export const getAuthIsAuthenticated = (state) => {
	return state.auth.isAuthenticated
}

export const getAuthIsSeller = (state) => {
	return state.auth.isSeller
}

export const getAuthLoginText = (state) => {
	return state.auth.isAuthText
}