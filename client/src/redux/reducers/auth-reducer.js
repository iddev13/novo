const LOGIN = 'novo/auth/LOGIN';
const LOGOUT = 'novo/auth/LOGOUT';

const storageName = 'userData'

const getStorageToken = () => {
	const data = JSON.parse(localStorage.getItem(storageName))
	if (data && data.token && data.token !== '') {
		return data.token
	}
}

let initialState = {
	token: null,
	userId: null,
	isAuthenticated: getStorageToken() || false,
	isSeller: true,
	isAuthFull: getStorageToken() || false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			const data = JSON.parse(localStorage.getItem(storageName))
			if (data && data.token) {
				console.log(data.token, data.userId)
				return {
					...state,
					token: data.token,
					userId: data.userId,
					isAuthenticated: !!data.token,
					isAuthFull: data
				}
			}
			return { ...state }
		case LOGOUT:
			return {
				...state,
				isAuthenticated: false
			}

		default: return state;
	}
}

export const loginAuth = (jwtToken, id) => {
	localStorage.setItem(storageName, JSON.stringify({
		userId: id, token: jwtToken
	}))
	return {
		type: LOGIN,
		jwtToken
	}
}

export const logoutAuth = () => {
	localStorage.removeItem(storageName)
	return {
		type: LOGOUT
	}
}

export default authReducer;