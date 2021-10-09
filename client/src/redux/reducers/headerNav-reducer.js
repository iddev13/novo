const TOGGLE_IS_ACTIVE = 'novo/nav/TOGGLE_IS_ACTIVE';
const SET_ACTIVE_LANGUAGE = 'novo/headerNav/SET_ACTIVE_LANGUAGE';
const SET_ACTIVE_CURRENCY = 'novo/headerNav/SET_ACTIVE_CURRENCY';

// const storageLanguage = 'userLanguage';

let initialState = {
	language: [
		{ id: 1, name: 'Русский', nameSm: 'RU', isActive: true },
		{ id: 2, name: 'Украинский', nameSm: 'UA', isActive: false },
	],
	currency: [
		{ id: 1, name: 'Евро', nameSm: '€', isActive: false },
		{ id: 2, name: 'Доллар', nameSm: '$', isActive: true },
		{ id: 3, name: 'Рубль', nameSm: 'RUR', isActive: false },
		{ id: 4, name: 'Гривна', nameSm: 'UAH', isActive: false },
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
		case SET_ACTIVE_LANGUAGE:
			return {
				...state,
				language: state.language.map(elem => {
					if (action.value === elem.id) {
						return { ...elem, isActive: true }
					}

					return { ...elem, isActive: false }
				})
			}
		case SET_ACTIVE_CURRENCY:
			return {
				...state,
				currency: state.currency.map(elem => {
					if (action.value !== elem.id) {
						return { ...elem, isActive: false }
					}
					return { ...elem, isActive: true }
				})
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

export const setActiveLanguage = (value) => {
	return {
		type: SET_ACTIVE_LANGUAGE,
		value
	}
}

export const setActiveCurrency = (value) => {
	return {
		type: SET_ACTIVE_CURRENCY,
		value
	}
}

export default headerNavReducer;