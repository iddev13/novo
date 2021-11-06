import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "../store";

const LOGIN = 'novo/auth/LOGIN';
const LOGOUT = 'novo/auth/LOGOUT';
const LOGIN_MESSAGE = 'novo/auth/LOGIN_MESSAGE';
const CLEAR_LOGIN_MESSAGE = 'novo/auth/CLEAR_LOGIN_MESSAGE';

const tokenTime: string = 'tokenTime'
const storageName: string = 'userData'
const setLoginTimeValue = (): void => {
	const date = Math.floor(Date.now() / 1000).toString() // seconds
	localStorage.setItem('tokenTime', date)
}

let tokenTimeValue: number = Number(localStorage.getItem(tokenTime))

if (tokenTimeValue + 3600 < Math.floor(Date.now() / 1000)) {
	localStorage.removeItem(storageName)
	localStorage.removeItem(tokenTime)
}

export const getStorageToken = () => {
	const data = JSON.parse(localStorage.getItem(storageName) || '{}')
	if (data && data.token && data.token !== '') {
		return data.token
	}
}

type InitialStateType = {
	token: boolean | null,
	userId: number | null,
	isAuthenticated: any,
	isSeller: boolean,
	isAuthText: string | null
}

let initialState: InitialStateType = {
	token: null,
	userId: null,
	isAuthenticated: getStorageToken() || false,
	isSeller: true,
	isAuthText: ''
};

type ActionsType = InferActionsTypes<typeof actionsAuth>

const authReducer = (state = initialState, action: ActionsType) => {
	switch (action.type) {
		case LOGIN:
			const data = JSON.parse(localStorage.getItem(storageName) || '{}')
			if (data && data.token) {
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
		default: return state;
	}
}

export const actionsAuth = {
	changeAuthLoginText: (text: string) => {
		return { type: LOGIN_MESSAGE, text } as const
	},
	cleanLoginMessage: () => {
		return { type: CLEAR_LOGIN_MESSAGE } as const
	},
	loginAuth: (jwtToken: string, id: number) => {
		localStorage.setItem(storageName, JSON.stringify({
			userId: id, token: jwtToken
		}))
		setLoginTimeValue()
		document.location.reload()
		return { type: LOGIN, jwtToken } as const
	},
	logoutAuth: () => {
		localStorage.removeItem(storageName)
		localStorage.removeItem(tokenTime)
		return { type: LOGOUT } as const
	}
}

export const LoginTC = (formData: any, request: any): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => {
	return async (dispatch) => {
		console.log('LoginTC');
		try {
			const data = await request('/api/auth/login', 'POST', { ...formData });
			dispatch(actionsAuth.loginAuth(data.token, data.userId));
			dispatch(actionsAuth.changeAuthLoginText(data.message))
			console.log('console LoginTC', data.message);
		} catch (error) {
			console.log(error);
		}
	}
}

export const RegisterTC = (formData: any, request: any): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => {
	return async (dispatch) => {
		try {
			console.log('RergisterTC');
			const data = await request('/api/auth/register', 'POST', { ...formData });
			console.log(data.message);
			dispatch(actionsAuth.changeAuthLoginText(data.message))
		} catch (error) {
			console.log(error);
		}
	}
}

export default authReducer;