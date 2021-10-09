const LOGIN = 'novo/auth/LOGIN';
const LOGOUT = 'novo/auth/LOGOUT';
const REGISTER = 'novo/auth/REGISTER';
const LOGIN_MESSAGE = 'novo/auth/LOGIN_MESSAGE';
const CLEAR_LOGIN_MESSAGE = 'novo/auth/CLEAR_LOGIN_MESSAGE';

const storageName = 'userData'

export const getStorageToken = () => {
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
	isAuthText: ''
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			const data = JSON.parse(localStorage.getItem(storageName))
			if (data && data.token) {
				// console.log(data.token, data.userId)
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
			return { ...state, isAuthenticated: false }
		case CLEAR_LOGIN_MESSAGE:
			return { ...state, isAuthText: '' }
		case LOGIN_MESSAGE:
			return { ...state, isAuthText: action.text }

		default: return state;
	}
}

export const changeAuthLoginText = (text) => {
	return {
		type: LOGIN_MESSAGE,
		text
	}
}

export const cleanLoginMessage = () => {
	return {
		type: CLEAR_LOGIN_MESSAGE
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

// export const getLoginData = async (formData, request) => {
// 	try {
// 		const data = await request('/api/auth/login', 'POST', { ...formData });
// 		// login(data.token, data.userId)
// 		loginAuth(data.token, data.userId);
// 		console.log(data.message);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// export const getRegisterData = async (formData, request) => {
// 	try {
// 		const data = await request('/api/auth/register', 'POST', { ...formData });
// 		console.log(data.message);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

export const LoginTC = (formData, request) => {
	return async (dispatch) => {
		console.log('LoginTC');
		try {
			const data = await request('/api/auth/login', 'POST', { ...formData });
			dispatch(loginAuth(data.token, data.userId));
			dispatch(changeAuthLoginText(data.message))
			console.log('console LoginTC', data.message);
		} catch (error) {
			console.log(error);
		}
	}
}

export const RegisterTC = (formData, request) => {
	return async (dispatch) => {
		try {
			console.log('RergisterTC');
			const data = await request('/api/auth/register', 'POST', { ...formData });
			console.log(data.message);
			dispatch(changeAuthLoginText(data.message))
		} catch (error) {
			console.log(error);
		}
	}
}

export default authReducer;