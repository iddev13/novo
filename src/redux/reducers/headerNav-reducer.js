const TOGGLE_IS_ACTIVE = 'novo/nav/TOGGLE_IS_ACTIVE'

let initialState = {
	navLink: [
		{ id: 1, linkAddress: '/', linkName: 'главная' },
		{ id: 2, linkAddress: '/about', linkName: 'обо мне' },
		{ id: 3, linkAddress: '/portfolio', linkName: 'портфолио' },
		{ id: 4, linkAddress: '/blog', linkName: 'блог' },
		{ id: 5, linkAddress: '/contact', linkName: 'контакты' },
	],
	myProfile: [
		{ id: 1, adress: '/', name: 'Избранное' },
		{ id: 2, adress: '/', name: 'Сообщнния' },
		{ id: 3, adress: '/', name: 'Настройки профиля' },
	],
	isActive: false
}

const headerNavReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_IS_ACTIVE:
			return {
				...state,
				isActive: action.value
			}
		default:
			return state;
	}
}

export const toggleIsActive = (value) => {
	return {
		type: TOGGLE_IS_ACTIVE,
		value
	}
}

export default headerNavReducer;